import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { StallData } from '../api/dataTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InformationModal from '../components/InformationModal';
import { StallCardProps } from '../components/StallCard';
import { MenuCardProps } from '../components/MenuCard';
import { getStallDetail, submitDislikeItem, submitLikeItem, submitSaveItem } from '../api/services/mainService';
import { useDebounce } from '../utils/debounce';


// If you already have a type or interface for the passed data, reuse that:

// Adjust this if your root navigator types differ
type RootStackParamList = {
  MenuDetails: { menuData: MenuCardProps };
  StallProfile: { stallData: StallCardProps };
};

type MenuDetailScreenRouteProp = RouteProp<RootStackParamList, 'MenuDetails'>;

const MenuDetailScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute<MenuDetailScreenRouteProp>();

  // Data passed from MenuCard
  const { menuData } = route.params;

  const [ stallData, setStallData ] = useState<StallCardProps | undefined>(undefined);
  // Replicate "like" / "dislike" / "isLoved" logic
  const [likeCount, setLikeCount] = useState<number>(menuData.likes || 0);
  const [dislikeCount, setDislikeCount] = useState<number>(menuData.dislikes || 0);
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(
    (menuData.liked ? 'like' : null) || (menuData.disliked ? 'dislike' : null)
  );
  const [isLoved, setIsLoved] = useState(menuData.saved);
  const [whyMenuModalVisible, setWhyMenuModalVisible] = useState(false);
  const titleForSeeThisMenuModal = "Why you see this menu?";
  const reasonForSeeThisMenu = menuData.reason || "At KU Eater, we want people to discover food they want to try. If it's not up to your taste, tell us!";

  useEffect(() => {
    // Call stall details
    getStallDetail(menuData.stallId).then((props) => setStallData(props));
  }, [])

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
      submitLikeItem(menuData.id);
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
      submitDislikeItem(menuData.id);
    }, 1000);
  
    const handleLovePress = () => {
      setIsLoved(!isLoved);
      submitSave();
    };
  
    const submitSave = useDebounce(() => {
      submitSaveItem(menuData.id);
    }, 1000);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleShare = () => {
    // Implement share logic or use Share API
    console.log('Share pressed!');
  };

  const handleWhyThisMenuPress = () => {
    // Example: show modal, or navigate to explanation screen
    setWhyMenuModalVisible(true);
  };

  const handleStallPress = () => {
    // Example: navigate to stall’s profile if desired
    if (stallData !== undefined)
    navigation.navigate('StallProfile', { stallData: stallData });
  };

  return (
    <View style={styles.container}>
      {/* Top banner with image */}
      <View style={styles.topBannerContainer}>

        {/* Menu image */}
        <Image
          source={{ uri: menuData.imageUrl }}
          style={styles.menuImage}
          resizeMode="cover"
        />

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="#066644" />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-social" size={24} color="#066644" />
        </TouchableOpacity>
      </View>

      {/* White card / content area */}
      <View style={styles.cardContainer}>
        {/* Price & Menu Name Row */}
        <View style={styles.menuTitleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.priceText}>{menuData.price} ฿</Text>
            <Text style={styles.menuNameText} numberOfLines={2}>
              {menuData.name}
            </Text>
          </View>

          {/* Heart icon */}
          <TouchableOpacity onPress={handleLovePress} style={styles.heartIconContainer}>
            <Ionicons
              name={isLoved ? 'heart' : 'heart-outline'}
              size={28}
              color={isLoved ? '#D7443E' : '#C1C1C1'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.likeRow}>
          {/* "Why you see this menu?" */}
          { menuData.score != undefined && menuData.score! >= 10 ?
          <TouchableOpacity onPress={handleWhyThisMenuPress}>
            <Text style={styles.whyMenuText}>Why you see this menu?</Text>
          </TouchableOpacity> : <></>
          }
          {/* Likes / Dislikes Row */}
          <View style={styles.likeDislikeRow}>
            {/* Like */}
            <TouchableOpacity onPress={handleLikePress} style={styles.likeDislikeButton}>
              <FontAwesome
                name="thumbs-up"
                size={20}
                color={userAction === 'like' ? '#008884' : '#999'}
              />
              <Text style={styles.likeCountText}>{likeCount}</Text>
            </TouchableOpacity>

            {/* Dislike */}
            <TouchableOpacity onPress={handleDislikePress} style={styles.likeDislikeButton}>
              <FontAwesome
                name="thumbs-down"
                size={20}
                color={userAction === 'dislike' ? '#B33E3E' : '#999'}
              />
            </TouchableOpacity>
          </View>

        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Stall Info Row */}
        <TouchableOpacity style={styles.stallRow} onPress={handleStallPress}>
          {/* Stall Image */}
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU' }} // example icon, replace with actual stall image
            style={styles.stallImage}
          />

          {/* Stall details */}
          <View style={styles.stallDetails}>

            <View style={styles.stallNameContainer}>
              <Ionicons name="restaurant" size={15} color="#999" />
              <Text style={styles.stallTitle}>
                {'  '}
                {menuData.stallLock} | {menuData.stallName}
              </Text>
            </View>

            {/* Example: Category + rating */}
            <View style={styles.stallSubRow}>
              <Ionicons name="pricetags" size={13} color="#999" />

              <Text style={styles.stallCategory}>{'  '} Beverages</Text>
              <Text style={styles.stallRating}>
                <Ionicons name="star" size={13} color="#D49E3A" /> 4.92
              </Text>
            </View>
          </View>

          {/* Arrow icon */}
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
        <View style={styles.divider} />
        {/* Optionally more sections or content below */}

        <InformationModal
  visible={whyMenuModalVisible}
  onClose={() => setWhyMenuModalVisible(false)}
  title={titleForSeeThisMenuModal}
  paragraphs={[
    reasonForSeeThisMenu
  ]}
/>

      </View>
    </View>
  );
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  // Top Banner
  topBannerContainer: {
    width: '100%',
    height: 280,
    position: 'relative',
  },
  topBackground: {
    // Brownish background behind the image
    backgroundColor: '#B08B6E',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 6,
  },
  shareButton: {
    position: 'absolute',
    top: 36,
    right: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 6,
  },
  // White card container
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: -30, // overlap with the banner
    padding: 16,
  },
  // Price & Name row
  menuTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  priceText: {
    fontSize: 20,
    color: '#3A3838',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  menuNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006664',
    marginBottom: 20,
  },

  heartIconContainer: {
    marginLeft: 10,
    marginTop: 2,
  },
  likeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  whyMenuText: {
    fontSize: 13,
    color: '#777',
    textDecorationLine: 'underline',
    marginBottom: 8,
    marginLeft: 4,
  },
  // Like / Dislike row
  likeDislikeRow: {
    flexDirection: 'row',
    marginBottom: 12,

  },
  likeDislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  likeCountText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#333',
  },
  // Divider
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginTop: 10,
    marginBottom: 16,

  },
  // Stall row
  stallRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stallImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  stallDetails: {
    flex: 1,
  },
  stallNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  stallTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  stallSubRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stallCategory: {
    fontSize: 14,
    color: '#999',
    marginRight: 12,
  },
  stallRating: {
    fontSize: 14,
    color: '#999',
  },
});
