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
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    menuName: 'Thai Steamed Fish Curry in banana leaf',
    price: '17',
    likes: 120,
    dislikes: 0,
    stallName: 'Eat Khao Keang Saen Rak (Rice A La Carte)',
    stallLock: '01',
    imageUrl:
      'https://res.cloudinary.com/dejzapat4/image/upload/v1739355607/01005_herl1f.jpg',
  },
  {
    id: 2,
    menuName: 'Deep-fried Swai Fish with fish sauce',
    price: '30',
    likes: 55,
    dislikes: 2,
    stallName: 'Eat Khao Keang Saen Rak (Rice A La Carte)',
    stallLock: '01',
    imageUrl:
      'https://res.cloudinary.com/dejzapat4/image/upload/v1739355608/01009_yfyfke.jpg',
  },
  {
    id: 3,
    menuName: 'Sun-dried tilapia fish',
    price: '20',
    likes: 5,
    dislikes: 2,
    stallName: 'Eat Khao Keang Saen Rak (Rice A La Carte)',
    stallLock: '01',
    imageUrl:
      'https://res.cloudinary.com/dejzapat4/image/upload/v1739355608/01010_rmzbuy.jpg',
  },
  {
    id: 4,
    menuName: 'Rice with teriyaki saba fish',
    price: '65',
    likes: 88,
    dislikes: 1,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl:
      'https://res.cloudinary.com/dejzapat4/image/upload/v1739442693/04077_i8vocp.jpg',
  },
  {
    id: 5,
    menuName: 'Rice with grilled salmon',
    price: '55',
    likes: 460,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442693/04078_lh40v2.jpg',
  },
  {
    id: 6,
    menuName: 'Rice with grilled Mackerel',
    price: '50',
    likes: 60,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442690/04065_bg3ybm.jpg',
  },
  {
    id: 7,
    menuName: 'Rice with steamed fish in lime sauce',
    price: '50',
    likes: 46,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442689/04063_mkbzal.jpg',
  },
  {
    id: 8,
    menuName: 'Rice with Thai-style spicy fish salad',
    price: '50',
    likes: 52,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442694/04081_i7ijd3.jpg',
  },
  {
    id: 9,
    menuName: 'Thai crispy catfish salad',
    price: '50',
    likes: 460,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '04',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442698/04089_z5rwec.jpg',
  },
  {
    id: 10,
    menuName: 'Rice with fried dory fish',
    price: '40',
    likes: 9,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442699/04091_xhaccb.jpg',
  },
  {
    id: 11,
    menuName: 'Rice with grilled salmon',
    price: '50',
    likes: 460,
    dislikes: 5,
    stallName: 'Block Calorie',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739442693/04078_lh40v2.jpg',
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