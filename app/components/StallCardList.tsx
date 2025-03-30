import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import StallCard from './StallCard';

type StallDataType = {
  id: number;
  rank: number;
  stallName: string;
  imageUrl: string;
  location: string;
  operatingHours: string;
  priceRange: string;
  tags: string;
  reviews: number;
  likes: number;
  rating: number;
};

interface StallCardListProps {
  data: StallDataType[];
}

const StallCardList: React.FC<StallCardListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <StallCard
          rank={item.rank}
          stallName={item.stallName}
          imageUrl={item.imageUrl}
          location={item.location}
          operatingHours={item.operatingHours}
          priceRange={item.priceRange}
          tags={item.tags}
          reviews={item.reviews}
          likes={item.likes}
          rating={item.rating}
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 4,
  },
});

export default StallCardList;
