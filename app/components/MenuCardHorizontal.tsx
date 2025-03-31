// components/MenuCardHorizontal.tsx

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MenuCard from './MenuCard';

type Menu = {
  id: number;
  menuName: string;
  price: string;
  likes: number;
  dislikes: number;
  stallName: string;
  stallLock: string;
  imageUrl: string;
};

type Props = {
  title?: string;
  customTitleComponent?: React.ReactNode;
  menus: Menu[];
};

const MenuCardHorizontal = ({ title, customTitleComponent, menus }: Props) => {
  return (
    <View style={styles.section}>
      {/* Title */}
      {customTitleComponent ? (
        customTitleComponent
      ) : (
        <Text style={styles.sectionTitle}>{title}</Text>
      )}

      {/* Scroll View */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {menus.map((menu) => (
          <MenuCard
            key={menu.id}
            menuName={menu.menuName}
            price={menu.price}
            likes={menu.likes}
            dislikes={menu.dislikes}
            stallName={menu.stallName}
            stallLock={menu.stallLock}
            imageUrl={menu.imageUrl}
            showStallName={true}
            customWidthPercent={42}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuCardHorizontal;

const styles = StyleSheet.create({
  section: {
    marginTop: 2,
    backgroundColor: '#FAF5F0',
    paddingBottom: 6,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#006664',
    marginTop: 12,
    marginHorizontal: 16,
    marginRight: 0,
  },
  scrollView: {
    paddingLeft: 8,
    paddingRight: 8,
    gap: 8,
    paddingTop: 2,

  },
});
