import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface MenuCardProps {
  typeCard: 'MenuCardinHome' | 'MenuCardinStall' | 'MenuCardinSaved';
  menuName: string;
  price: string;
  likes: number;
  dislikes: number;
  stallName: string;
  stallLock: string;
  imageUrl: string;
};

// ---------------------
// IMPORTANT: Renamed the route to 'MenuDetails' and updated the type
// ---------------------
type RootStackParamList = {
  // If you have other screens, list them here as well
  MenuDetails: { menuData: MenuCardProps };
  // e.g. StallProfile: undefined;
};

const screenWidth = Dimensions.get('window').width;

const MenuCard: React.FC<MenuCardProps> = ({
  typeCard,
  menuName,
  price,
  likes,
  dislikes,
  stallName,
  stallLock,
  imageUrl,
}) => {
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [isLoved, setIsLoved] = useState(false);

  const cardWidth =
    typeCard === 'MenuCardinHome' ? screenWidth * 0.4 : screenWidth * 0.478;

  const handleLikePress = () => {
    if (userAction === 'like') {
      // Undo like
      setUserAction(null);
      setLikeCount(likeCount - 1);
    } else {
      // Like the item
      setUserAction('like');
      setLikeCount(likeCount + 1);
      if (userAction === 'dislike') {
        setDislikeCount(dislikeCount - 1);
      }
    }
  };

  const handleDislikePress = () => {
    if (userAction === 'dislike') {
      // Undo dislike
      setUserAction(null);
      setDislikeCount(dislikeCount - 1);
    } else {
      // Dislike the item
      setUserAction('dislike');
      setDislikeCount(dislikeCount + 1);
      if (userAction === 'like') {
        setLikeCount(likeCount - 1);
      }
    }
  };

  const handleLovePress = () => {
    setIsLoved(!isLoved);
  };

  // -----------
  // Navigation Setup
  // -----------
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCardPress = () => {
    // Pass the card's data to the MenuDetails screen
    navigation.navigate('MenuDetails', {
      menuData: {
        typeCard,
        menuName,
        price,
        likes: likeCount,
        dislikes: dislikeCount,
        stallName,
        stallLock,
        imageUrl,
      },
    });
  };

  return (
    // Wrap the entire card in a TouchableOpacity
    <TouchableOpacity onPress={handleCardPress} activeOpacity={0.95}>
      <View style={[styles.card, { width: cardWidth }]}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          {/* Love Button */}
          <TouchableOpacity style={styles.loveButton} onPress={handleLovePress}>
            <Ionicons
              name={isLoved ? 'heart' : 'heart-outline'}
              size={18}
              color={isLoved ? '#D7443E' : '#888'}
            />
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <Text style={styles.menuName} numberOfLines={1}>
            {menuName}
          </Text>
          {(typeCard === 'MenuCardinHome' || typeCard === 'MenuCardinSaved') && (
            <View style={styles.stallNameContainer}>
              <Ionicons name="restaurant" size={12} color="#999" style={styles.stallIcon} />
              <Text style={styles.stallName} numberOfLines={1}>
                {' '}
                {stallLock} | {stallName}
              </Text>
            </View>
          )}
          <View style={styles.bottomSection}>
            <Text style={styles.price}>{price} ฿</Text>
            <View style={styles.ratingSection}>
              {/* Like Button */}
              <TouchableOpacity onPress={handleLikePress} style={styles.ratingButton}>
                <FontAwesome
                  name="thumbs-up"
                  size={20}
                  color={userAction === 'like' ? '#008884' : '#999'}
                />
                <Text style={styles.ratingText}>{likeCount} |</Text>
              </TouchableOpacity>

              {/* Dislike Button */}
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
    marginLeft: 6,
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
  menuName: {
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
