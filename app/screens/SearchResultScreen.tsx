// screens/SearchResultScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import StallCard from '../components/StallCard';
import MenuCard from '../components/MenuCard';

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

type MenuDataType = {
  id: number;
  menuName: string;
  price: string;
  likes: number;
  dislikes: number;
  stallName: string;
  stallLock: string;
  imageUrl: string;
  typeCard: 'MenuCardinHome' | 'MenuCardinStall' | 'MenuCardinSaved';
};

// Mock stalls
const mockStallData: StallDataType[] = [
  {
    id: 1,
    rank: 1,
    stallName: 'Double YenYen',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
    location: '43',
    operatingHours: '08.00 - 16.30',
    priceRange: '15 - 40',
    tags: 'Beverages, Smoothies, Fruit, etc.',
    reviews: 27,
    likes: 581,
    rating: 4.76,
  },
  {
    id: 2,
    rank: 2,
    stallName: 'Toei Kaew (Beverages)',
    imageUrl:
      'https://drive.google.com/uc?id=1wbDqPSyYn--XZQhey6j7AJ45h9G7ovH_',
    location: '37',
    operatingHours: '07.30 - 17.30',
    priceRange: '5 - 40',
    tags: 'Thai, Beverages, Smoothies, Fruit',
    reviews: 119,
    likes: 1678,
    rating: 4.92,
  },
  {
    id: 3,
    rank: 3,
    stallName: 'SHEEP & ALLY',
    imageUrl:
      'https://img.wongnai.com/p/1920x0/2023/08/28/140f720406f7403cab6ae74a58887a8f.jpg',
    location: '40',
    operatingHours: '07.30 - 17.30',
    priceRange: '35 - 60',
    tags: 'Western, Beverages, Healthy, etc.',
    reviews: 10,
    likes: 64,
    rating: 4.59,
  },
];

// Mock menus - with typeCard = MenuCardinSaved
const mockMenuData: MenuDataType[] = [
  {
    id: 1,
    menuName: 'Grilled Saba with Rice',
    price: '40',
    likes: 88,
    dislikes: 1,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl:
      'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
    typeCard: 'MenuCardinSaved', // <--- important
  },
  {
    id: 2,
    menuName: 'Pork Chop Basil Rice',
    price: '45',
    likes: 120,
    dislikes: 0,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl:
      'https://res.cloudinary.com/dejzapat4/image/upload/v1739355627/02027_cg98ot.jpg',
    typeCard: 'MenuCardinSaved',
  },
  {
    id: 3,
    menuName: 'Double YenYen Drink',
    price: '30',
    likes: 55,
    dislikes: 2,
    stallName: 'Double YenYen',
    stallLock: '43',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
    typeCard: 'MenuCardinSaved',
  },
];

const SearchResultScreen = () => {
  const route = useRoute();
  // extract 'query' passed from SearchScreen
  const query = (route.params as any)?.query || '';

  // local state for active tab
  const [activeTab, setActiveTab] = useState<'stall' | 'menu'>('stall');

  return (
    <View style={styles.container}>
      {/* Reuse your SearchBar at the top */}
      <SearchBar />

      {/* Possibly show the user's search query */}
      <Text style={styles.searchQueryText}>
        Showing results for: <Text style={{ fontWeight: 'bold' }}>{query}</Text>
      </Text>

      {/* Two Tabs: Food Stall / Menu */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'stall' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('stall')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'stall' && styles.activeTabText,
            ]}
          >
            Food Stall
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'menu' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('menu')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'menu' && styles.activeTabText,
            ]}
          >
            Menu
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === 'stall' ? (
        // Display Stall results
        <ScrollView style={styles.resultScroll}>
          {mockStallData.map((stall) => (
            <StallCard key={stall.id} {...stall} />
          ))}
        </ScrollView>
      ) : (
        // Display Menu results using MenuCard with typeCard=MenuCardinSaved
        <FlatList
          style={styles.resultScroll}
          data={mockMenuData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MenuCard
              typeCard={item.typeCard} // "MenuCardinSaved"
              menuName={item.menuName}
              price={item.price}
              likes={item.likes}
              dislikes={item.dislikes}
              stallName={item.stallName}
              stallLock={item.stallLock}
              imageUrl={item.imageUrl}
            />
          )}
        />
      )}
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchQueryText: {
    fontSize: 14,
    color: '#006664',
    marginTop: 10,
    marginHorizontal: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#006664',
  },
  activeTabText: {
    color: '#006664',
    fontWeight: '600',
  },
  resultScroll: {
    marginTop: 10,
    marginHorizontal: 8,
  },
});
