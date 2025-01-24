import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

interface MenuCardProps {
  type: 'MenuCardinHome' | 'MenuCardinStall'; // Two card types
  menuName: string; // Name of the menu item
  price: string; // Price of the item
  likes: number; // Number of likes
  dislikes?: number; // Number of dislikes (optional if needed)
  stallName?: string; // Optional: Stall name (only for MenuCardinHome)
  imageUrl: string; // Image URL for the menu item
}

const screenWidth = Dimensions.get('window').width;

const MenuCard: React.FC<MenuCardProps> = ({
  type,
  menuName,
  price,
  likes,
  dislikes = 0,
  stallName,
  imageUrl,
}) => {
  const [isLoved, setIsLoved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  const isHomeCard = type === 'MenuCardinHome';
  const cardWidth = isHomeCard ? screenWidth * 0.35 : screenWidth * 0.5;

  const handleLovePress = () => {
    setIsLoved(!isLoved);
  };

  const handleLikePress = () => {
    setLikeCount(likeCount + 1);
    if (dislikeCount > 0) setDislikeCount(dislikeCount - 1); // Avoid double count
  };

  const handleDislikePress = () => {
    setDislikeCount(dislikeCount + 1);
    if (likeCount > 0) setLikeCount(likeCount - 1); // Avoid double count
  };

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {/* Love Button */}
        <TouchableOpacity style={styles.loveButton} onPress={handleLovePress}>
          <Ionicons
            name={isLoved ? 'heart' : 'heart-outline'}
            size={24}
            color={isLoved ? 'red' : '#888'}
          />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.menuName} numberOfLines={1}>
          {menuName}
        </Text>
        {isHomeCard && stallName && (
          <Text style={styles.stallName} numberOfLines={1}>
            {stallName}
          </Text>
        )}
        <View style={styles.bottomSection}>
          <Text style={styles.price}>{price} ฿</Text>
          <View style={styles.ratingSection}>
            {/* Like Button */}
            <TouchableOpacity onPress={handleLikePress} style={styles.ratingButton}>
              <FontAwesome name="thumbs-up" size={20} color="#28a745" />
              <Text style={styles.ratingText}>{likeCount}</Text>
            </TouchableOpacity>
            {/* Dislike Button */}
            <TouchableOpacity onPress={handleDislikePress} style={styles.ratingButton}>
              <FontAwesome name="thumbs-down" size={20} color="#dc3545" />
              <Text style={styles.ratingText}>{dislikeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100, // Adjust based on design
  },
  loveButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    padding: 4,
  },
  content: {
    padding: 8,
  },
  menuName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#28a745',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default MenuCard;
