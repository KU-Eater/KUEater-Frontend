// component/MenuCard.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDebounce } from '../utils/debounce';
import { submitDislikeItem, submitLikeItem, submitSaveItem } from '../api/services/mainService';

export interface MenuCardProps {
  id: string;
  name: string;
  price: string;
  likes: number;
  dislikes: number;
  stallId: string;
  stallName: string;
  stallLock: string;
  imageUrl: string;
  score?: number;
  reason?: string;
  liked?: boolean;
  disliked?: boolean;
  saved?: boolean;
  showStallName?: boolean;         // ✅ NEW - toggle stall name display
  customWidthPercent?: number;     // ✅ NEW - set card width (default = 48%)
  style?: any;
}

type RootStackParamList = {
  MenuDetails: { menuData: Omit<MenuCardProps, 'showStallName' | 'customWidthPercent'> };
};

const screenWidth = Dimensions.get('window').width;

const MenuCard: React.FC<MenuCardProps> = ({
  id,
  name,
  price,
  likes,
  dislikes,
  stallId,
  stallName,
  stallLock,
  imageUrl,
  score = 0,
  reason = "",
  liked = false,
  disliked = false,
  saved = false,
  showStallName = true,
  customWidthPercent = 48,
}) => {
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(
    (liked ? 'like' : null) || (disliked ? 'dislike' : null)
  );
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [isLoved, setIsLoved] = useState(saved);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCardPress = () => {
    navigation.navigate('MenuDetails', {
      menuData: {
        id,
        name,
        price,
        likes: likeCount,
        dislikes: dislikeCount,
        stallId,
        stallName,
        stallLock,
        imageUrl,
        score,
        reason,
        liked: (userAction == 'like'),
        disliked: (userAction == 'dislike'),
        saved: isLoved
      },
    });
  };

  const handleLikePress = () => {
    if (userAction === 'like') {
      setUserAction(null);
      setLikeCount(likeCount - 1);
    } else {
      setUserAction('like');
      setLikeCount(likeCount + 1);
      if (userAction === 'dislike') setDislikeCount(dislikeCount - 1);
    }
    submitLike();
  };

  const submitLike = useDebounce(() => {
    submitLikeItem(id);
  }, 1000);

  const handleDislikePress = () => {
    if (userAction === 'dislike') {
      setUserAction(null);
      setDislikeCount(dislikeCount - 1);
    } else {
      setUserAction('dislike');
      setDislikeCount(dislikeCount + 1);
      if (userAction === 'like') setLikeCount(likeCount - 1);
    }
    submitDislike();
  };

  const submitDislike = useDebounce(() => {
    submitDislikeItem(id);
  }, 1000);

  const handleLovePress = () => {
    setIsLoved(!isLoved);
    submitSave();
  };

  const submitSave = useDebounce(() => {
    submitSaveItem(id);
  }, 1000);

  // const screenPadding = 16;
  // const cardSpacing = 8;
  const cardWidth = (screenWidth) * (customWidthPercent / 100);

  return (
    <TouchableOpacity onPress={handleCardPress} activeOpacity={0.95}>
      <View style={[styles.card, { width: cardWidth }]}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <TouchableOpacity style={styles.loveButton} onPress={handleLovePress}>
            <Ionicons
              name={isLoved ? 'heart' : 'heart-outline'}
              size={18}
              color={isLoved ? '#D7443E' : '#888'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          {showStallName && (
            <View style={styles.stallNameContainer}>
              <Ionicons
                name="restaurant"
                size={12}
                color="#999"
                style={styles.stallIcon}
              />
              <Text style={styles.stallName} numberOfLines={1}>
                {' '}
                {stallLock} | {stallName}
              </Text>
            </View>
          )}

          <View style={styles.bottomSection}>
            <Text style={styles.price}>{price} ฿</Text>
            <View style={styles.ratingSection}>
              <TouchableOpacity onPress={handleLikePress} style={styles.ratingButton}>
                <FontAwesome
                  name="thumbs-up"
                  size={20}
                  color={userAction === 'like' ? '#008884' : '#999'}
                />
                <Text style={styles.ratingText}>{likeCount} |</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleDislikePress} style={styles.ratingButton}>
                <FontAwesome
                  name="thumbs-down"
                  size={20}
                  color={userAction === 'dislike' ? '#B33E3E' : '#999'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#E9DCD3',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
  },
  loveButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 4,
  },
  content: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006664',
  },
  stallNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  stallIcon: {
    marginRight: 4,
  },
  stallName: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3A3838',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    paddingVertical: 4,
  },
  ratingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#555',
  },
});
