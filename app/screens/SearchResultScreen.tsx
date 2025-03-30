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
import MenuCardGrid from '../components/MenuCardGrid';
import StallCardList from '../components/StallCardList';

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
  },
  {
    id: 4,
    menuName: 'Thai sukiyaki soup with seafood',
    price: '50',
    likes: 460,
    dislikes: 5,
    stallName: 'Nong Pim A LA CARTE (Stir Fry)',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355622/02017_kc8tej.jpg',
  },
];

const SearchResultScreen = () => {
  const route = useRoute();
  // extract 'query' passed from SearchScreen
  const query = (route.params as any)?.query || '';

  // local state for active tab
  const [activeTab, setActiveTab] = useState<'Food Stall' | 'Menu'>('Menu');
  const renderContent = () => {
    if (activeTab === 'Food Stall') {
      return <StallCardList data={mockStallData} />;
    }
    return <MenuCardGrid data={mockMenuData} />;
  };
  return (
    <View style={styles.container}>
      {/* Reuse your SearchBar at the top */}
      <SearchBar />

      {/* Possibly show the user's search query */}
      {/* <View style={styles.background}>
        <Text style={styles.searchQueryText}>
          Showing results for: <Text style={{ fontWeight: 'bold' }}>{query}</Text>
        </Text>
      </View> */}
      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Menu' && styles.activeTab]}
          onPress={() => setActiveTab('Menu')}
        >
          <Text style={[styles.tabText, activeTab === 'Menu' && styles.activeTabText]}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Food Stall' && styles.activeTab]}
          onPress={() => setActiveTab('Food Stall')}
        >
          <Text style={[styles.tabText, activeTab === 'Food Stall' && styles.activeTabText]}>
            Food Stall
          </Text>
        </TouchableOpacity>

      </View>

      {/* Content */}
      <View style={styles.content}>{renderContent()}</View>

    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  searchQueryText: {
    fontSize: 14,
    color: '#006664',

  },
  background: {
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop: 16
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#006664',
  },
  tabText: {
    fontSize: 15,
    color: '#777',
  },
  activeTabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#006664',
  },
  content: {
    flex: 1,
    paddingTop: 8,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 12,

  },
  menuColumn: {
    justifyContent: "space-between",
    marginBottom: 8,


  },
  heartOverlay: {
    position: 'absolute',
  },
});