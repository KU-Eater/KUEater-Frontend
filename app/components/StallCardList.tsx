// components/StallCardList.tsx

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StallCard, { StallCardProps } from './StallCard';

interface StallCardListProps {
  data: StallCardProps[];
  scrollEnabled?: boolean;
  title?: string;
  customTitleComponent?: React.ReactNode;
}

const StallCardList: React.FC<StallCardListProps> = ({
  data,
  scrollEnabled = true,
  title,
  customTitleComponent,
}) => {
  return (
    <View style={styles.section}>
      {/* Title */}
      {customTitleComponent ? (
        customTitleComponent
      ) : title ? (
        <Text style={styles.sectionTitle}>{title}</Text>
      ) : null}

      {/* Stall list */}
      <FlatList
        data={data}
        scrollEnabled={scrollEnabled}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StallCard
            id={item.id}
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
            saved={item.saved}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default StallCardList;

const styles = StyleSheet.create({
  section: {
    marginTop: 4,
    backgroundColor: '#FAF5F0',
    paddingBottom: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#006664',
    marginTop: 16,
    marginHorizontal: 16,
  },
  listContent: {
    paddingTop: 5,
    paddingBottom: 6,
    paddingHorizontal: 4,
  },
});
