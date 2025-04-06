// component/MenuCardGrid.tsx
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MenuCard, { MenuCardProps } from './MenuCard';

interface MenuCardGridProps {
  data: MenuCardProps[];
  showStallName?: boolean;
  customWidthPercent?: number;
  scrollEnabled?: boolean;
  onEndReached?: ((info: {distanceFromEnd: number}) => void)
}

const MenuCardGrid: React.FC<MenuCardGridProps> = ({
  data,
  showStallName = true,
  customWidthPercent = 47,
  scrollEnabled = true,
  onEndReached = undefined
}) => {
  // ✅ เติม null ถ้าเป็นเลขคี่
  const adjustedData: (MenuCardProps | null)[] =
    data.length % 2 === 1 ? [...data, null] : data;

  const endReachProps = onEndReached ? {
    onEndReached: onEndReached,
    onEndReachedThreshold: 0.3
  } : undefined;

  return (
    <FlatList
      data={adjustedData}
      keyExtractor={(item, index) =>
        item ? item.id.toString() : `empty-${index}`
      }
      numColumns={2}
      columnWrapperStyle={styles.menuColumn}
      contentContainerStyle={styles.listContent}
      scrollEnabled={scrollEnabled}
      {...endReachProps}
      renderItem={({ item }) =>
        item ? (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            likes={item.likes}
            dislikes={item.dislikes}
            stallId={item.stallId}
            stallName={item.stallName}
            stallLock={item.stallLock}
            imageUrl={item.imageUrl}
            score={item.score}
            reason={item.reason}
            liked={item.liked}
            disliked={item.disliked}
            saved={item.saved}
            showStallName={showStallName}
            customWidthPercent={customWidthPercent}
          />
        ) : (
          // กรณี null → เว้นว่าง
          <View style={{ width: `${customWidthPercent}%` }} />
        )
      }
    />
  );
};

export default MenuCardGrid;

const styles = StyleSheet.create({
  menuColumn: {
    justifyContent: 'space-evenly',
    marginBottom: 8,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
});
