// StallCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StallData } from '../api/dataTypes';
import RankBadge from './ฺRankBadge';
import { useDebounce } from '../utils/debounce';
import { submitSaveStall } from '../api/services/mainService';

export interface StallCardProps extends StallData {
  rank: number;
  saved?: boolean;
  hideBadge?: boolean;
}

// Define the navigation stack types
type RootStackParamList = {
  StallProfile: { stallData: StallCardProps };
};

const StallCard: React.FC<StallCardProps> = (props) => {
  const {
    id,
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
    saved
  } = props;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [isBookmarked, setIsBookmarked] = useState(saved);

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
    submitBookmark();
  };

  const submitBookmark = useDebounce(() => {
        submitSaveStall(id);
      }, 1000);

  const handleCardPress = () => {
    navigation.navigate('StallProfile', { stallData: props });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      {!props.hideBadge && <RankBadge rank={rank} />}

      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmarkPress}>
          <Ionicons name="bookmark" size={35} color={isBookmarked ? '#006664' : '#D0CECE'} />
        </TouchableOpacity>

        <Text style={styles.stallName} numberOfLines={1}>{stallName}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="location-sharp" size={14} color="#006664" />
          <Text style={styles.infoText}>{location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time" size={14} color="#006664" />
          <Text style={styles.infoText}>{operatingHours}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="logo-bitcoin" size={14} color="#006664" />
          <Text style={styles.infoText}>{priceRange}</Text>
        </View>

        <Text style={styles.tags} numberOfLines={1}>{tags}</Text>

        <View style={styles.statsRow}>
          <Text style={styles.stat}>{reviews} Reviews</Text>
          <Text style={styles.stat}>{likes} Likes</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#D49E3A" />
            <Text style={styles.rating}>{rating.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StallCard;

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

  image: {
    width: '40%',
    height: '100%',
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
    color: '#006664',
    marginTop: 8,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 34,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginLeft: 4,
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
    marginLeft: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    marginHorizontal: 4,
    marginBottom: 5,
    marginRight: 10,
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
    color: '#3A3838',
  },

});
