import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

interface MenuDetails {
  menuName: string;
  price: string;
  likes: number;
  dislikes: number;
  stallName: string;
  stallLock: string;
  imageUrl: string;
  stallRating: number;
  stallType: string;
  stallImage: string;
}

type RouteParams = {
  menuData: MenuDetails;
};

const MenuDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { menuData } = route.params as RouteParams;

  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);
  const [likeCount, setLikeCount] = useState(menuData.likes);
  const [dislikeCount, setDislikeCount] = useState(menuData.dislikes);
  const [isLoved, setIsLoved] = useState(false);

  const handleLikePress = () => {
    if (userAction === 'like') {
      setUserAction(null);
      setLikeCount(likeCount - 1);
    } else {
      setUserAction('like');
      setLikeCount(likeCount + 1);
      if (userAction === 'dislike') {
        setDislikeCount(dislikeCount - 1);
      }
    }
  };

  const handleDislikePress = () => {
    if (userAction === 'dislike') {
      setUserAction(null);
      setDislikeCount(dislikeCount - 1);
    } else {
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

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: menuData.imageUrl }} style={styles.image} />
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#006664" />
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={26} color="#006664" />
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Price and Menu Name */}
          <Text style={styles.price}>{menuData.price} ฿</Text>
          <Text style={styles.menuName}>{menuData.menuName}</Text>

          {/* Why you see this menu */}
          <TouchableOpacity>
            <Text style={styles.whyText}>Why you see this menu?</Text>
          </TouchableOpacity>

          {/* Like & Dislike Section */}
          <View style={styles.likeDislikeRow}>
            <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
              <FontAwesome name="thumbs-up" size={20} color={userAction === 'like' ? '#008884' : '#999'} />
              <Text style={styles.likeCount}>{likeCount}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDislikePress} style={styles.dislikeButton}>
              <FontAwesome name="thumbs-down" size={20} color={userAction === 'dislike' ? '#B33E3E' : '#999'} />
            </TouchableOpacity>
          </View>

          {/* Stall Info Section */}
          <TouchableOpacity style={styles.stallContainer}>
            {/* Stall Image */}
            <Image source={{ uri: menuData.stallImage }} style={styles.stallImage} />

            {/* Stall Info */}
            <View style={styles.stallInfo}>
              <View style={styles.stallRow}>
                <Ionicons name="restaurant" size={16} color="#006664" />
                <Text style={styles.stallText}>{menuData.stallLock}  {menuData.stallName}</Text>
              </View>
              <Text style={styles.stallType}>{menuData.stallType}</Text>
            </View>

            {/* Rating */}
            <View style={styles.stallRating}>
              <Ionicons name="star" size={16} color="#D49E3A" />
              <Text style={styles.ratingText}>{menuData.stallRating.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 8,
  },
  shareButton: {
    position: 'absolute',
    top: 30,
    right: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A3838',
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006664',
    marginVertical: 6,
  },
  whyText: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'underline',
  },
  likeDislikeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#333',
  },
  dislikeButton: {
    marginLeft: 12,
  },
  stallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
  },
  stallImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 10,
  },
  stallInfo: {
    flex: 1,
  },
  stallRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stallText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  stallType: {
    fontSize: 14,
    color: '#777',
  },
  stallRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#D49E3A',
  },
});
