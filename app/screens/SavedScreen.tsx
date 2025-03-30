import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import StallCard from '../components/StallCard'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import { Ionicons } from '@expo/vector-icons';
import BookmarkHeartIcon from '../components/NavBar';
import MenuCardGrid from '../components/MenuCardGrid';
import StallCardList from '../components/StallCardList';

const mockSavedMenuData = [
  {
    id: 1,
    menuName: 'Deep-fried swai fish with fish sauce',
    price: '15',
    likes: 12,
    dislikes: 2,
    stallName: 'Eat Khao Keang Saen Rak (Rice A La Carte)',
    stallLock: '01',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355608/01009_yfyfke.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 2,
    menuName: 'Rice with crispy pork and holy basil',
    price: '40',
    likes: 210,
    dislikes: 1,
    stallName: 'Nong Pim A LA CARTE (Stir Fry)',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355609/02001_krbh1n.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 3,
    menuName: 'Rice with fried pork and garlic',
    price: '40',
    likes: 96,
    dislikes: 3,
    stallName: 'Nong Pim A LA CARTE (Stir Fry)',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355615/02007_e1equn.jpg',
    typeCard: 'MenuCardinSaved' as const,
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
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 5,
    menuName: 'Thai boat noodles with small rice noodles and stewed pork',
    price: '50',
    likes: 340,
    dislikes: 4,
    stallName: 'Yoksod Noodle',
    stallLock: '03',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739360042/03011_awlirj.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 6,
    menuName: 'Deep-fried battered chicken thigh',
    price: '25',
    likes: 956,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '07',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22001_hsn5yx.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 7,
    menuName: 'Deep-fried battered chicken drumstick',
    price: '18',
    likes: 621,
    dislikes: 3,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '12',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22002_agofym.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
  {
    id: 8,
    menuName: 'Iced Thai tea',
    price: '45',
    likes: 512,
    dislikes: 10,
    stallName: 'WUA LUAN LUAN',
    stallLock: '23',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739728589/23020_av2w61.jpg',
    typeCard: 'MenuCardinSaved' as const,
  },
];

// Replace this entire array
const mockSavedStallData = [
  {
    id: 1,
    rank: 1,
    stallName: 'Mr. Raw Fried Chicken',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
    location: '22',
    operatingHours: '10.00 - 14.00',
    priceRange: '5 - 25 ฿',
    tags: 'Fast Food',
    reviews: 88,
    likes: 1200,
    rating: 4.66,
  },
  {
    id: 2,
    rank: 5,
    stallName: 'Nong Pim A LA CARTE',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739720009/profile_S02_plyx6q.jpg',
    location: '02',
    operatingHours: '07.00 - 17.30',
    priceRange: '25 - 55',
    tags: 'Cook-to-order',
    reviews: 119,
    likes: 1678,
    rating: 4.92,
  },
  {
    id: 3,
    rank: 10,
    stallName: 'Block Calories',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739719991/profile_S04_unonbb.jpg',
    location: '04',
    operatingHours: '07.30 - 15.30',
    priceRange: '40 - 70',
    tags: 'Thai',
    reviews: 43,
    likes: 1264,
    rating: 4.89,
  },
  {
    id: 4,
    rank: 2,
    stallName: 'Toei Kaew (Beverages)',
    imageUrl: 'https://drive.google.com/uc?id=1wbDqPSyYn--XZQhey6j7AJ45h9G7ovH_',
    location: '37',
    operatingHours: '07.00 - 17.30',
    priceRange: '5 - 40',
    tags: 'Beverages',
    reviews: 119,
    likes: 1678,
    rating: 4.92,
  },
  {
    id: 5,
    rank: 3,
    stallName: 'Pilin Local North',
    imageUrl: 'https://img.wongnai.com/p/1920x0/2023/08/28/140f720406f7403cab6ae74a58887a8f.jpg',
    location: '22',
    operatingHours: '07.30 - 15.30',
    priceRange: '35 - 60',
    tags: 'Thai',
    reviews: 43,
    likes: 1264,
    rating: 4.89,
  },
];


const SavedScreen = () => {
  const [activeTab, setActiveTab] = useState<'Food Stall' | 'Menu'>('Menu');
  const iconSize = 22;

  const renderContent = () => {
    if (activeTab === 'Food Stall') {
      return <StallCardList data={mockSavedStallData} />;
    }
    return <MenuCardGrid data={mockSavedMenuData} />;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Saved list{'  '}
        </Text>
        <View>

          {/* <BookmarkHeartIcon/> */}
          {/* Bookmark icon */}
          <Ionicons name='bookmarks' size={iconSize} color='#006664' />
          {/* Heart icon (overlayed) */}
          <Ionicons name='heart' size={iconSize / 2.35} color='#FFFFFF'
            style={[
              styles.heartOverlay,
              { top: iconSize * 0.25, left: iconSize * 0.2 },
            ]}
          />
        </View>
      </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#006664',

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

export default SavedScreen;
