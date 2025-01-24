import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

interface StallCardProps {
  rank: number; // Stall rank
  stallName: string; // Stall name
  imageUrl: string; // Image URL of the stall
  location: string; // Stall location
  operatingHours: string; // Operating hours
  priceRange: string; // Price range
  tags: string; // Tags/categories
  reviews: number; // Number of reviews
  likes: number; // Number of likes
  rating: number; // Rating
}

const StallCard: React.FC<StallCardProps> = ({
  rank,
  stallName,
  imageUrl,
  location,
  operatingHours,
  priceRange,
  tags,
  reviews,
  likes,
  rating,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.card}>
       {/* Top Left Rank Badge */}
       <View style={styles.rankBadge}>
          <Text style={styles.rankText}>TOP {rank}</Text>
        </View>

      {/* Image Section */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Details Section */}
      <View style={styles.details}>
        {/* Bookmark Button */}
        <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmarkPress}>
          <Ionicons
            name={isBookmarked ? 'bookmark' : 'bookmark'}
            size={35}
            color={isBookmarked ? '#006664' : '#D0CECE'}
          />
        </TouchableOpacity>

        {/* Stall Name */}
        <Text style={styles.stallName} numberOfLines={1}>
          {stallName}
        </Text>

        {/* Location */}
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={14} color="#555" />
          <Text style={styles.infoText}>{location}</Text>
        </View>

        {/* Operating Hours */}
        <View style={styles.infoRow}>
          <FontAwesome name="clock-o" size={14} color="#555" />
          <Text style={styles.infoText}>{operatingHours}</Text>
        </View>

        {/* Price Range */}
        <View style={styles.infoRow}>
          <FontAwesome name="money" size={14} color="#555" />
          <Text style={styles.infoText}>{priceRange}</Text>
        </View>

        {/* Tags */}
        <Text style={styles.tags} numberOfLines={1}>
          {tags}
        </Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <Text style={styles.stat}>{reviews} Reviews</Text>
          <Text style={styles.stat}>{likes} Likes</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={14} color="#f4c20d" />
            <Text style={styles.rating}>{rating.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#E9DCD3',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  rankBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#006662',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 2,
  },
  rankText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  details: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 8,
  },
  stallName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  infoText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
  },
  tags: {
    fontSize: 11,
    color: '#777',
    marginTop: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  stat: {
    fontSize: 11,
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 3,
    color: '#f4c20d',
  },
});

export default StallCard;
