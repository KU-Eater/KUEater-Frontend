import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import StallCard from '../components/StallCard'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import { Ionicons } from '@expo/vector-icons';
import  BookmarkHeartIcon from '../components/NavBar';

const mockSavedMenuData = [
    {
      id: 1,
      menuName: 'Grilled Saba with Rice',
      price: '50',
      likes: 212,
      dislikes: 0,
      stallName: 'Eat 8 Ate',
      stallLock: '08',
      imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
      typeCard: 'MenuCardinSaved' as const,
    },
    {
      id: 2,
      menuName: 'Fried Rice Chicken',
      price: '25',
      likes: 120,
      dislikes: 0,
      stallName: 'Mr. Raw Fried Chicken (A La Carte)',
      stallLock: '22',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
      typeCard: 'MenuCardinSaved' as const,
    },
    {
      id: 3,
      menuName: 'Pandan Juice',
      price: '5',
      likes: 641,
      dislikes: 0,
      stallName: 'Toei Kaew (Beverages)',
      stallLock: '26',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
      typeCard: 'MenuCardinSaved' as const,
    },
    {
        id: 4,
        menuName: 'Rice with crispy pork and Chinese kale',
        price: '50',
        likes: 75,
        dislikes: 3,
        stallName: 'Nong Pim A LA CARTE (Stir Fry)',
        stallLock: '02',
        imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355627/02027_cg98ot.jpg',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 5,
        menuName: 'Fried Rice Chicken',
        price: '25',
        likes: 120,
        dislikes: 0,
        stallName: 'Mr. Raw Fried Chicken (A La Carte)',
        stallLock: '22',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 6,
        menuName: 'Pandan Juice',
        price: '5',
        likes: 641,
        dislikes: 0,
        stallName: 'Toei Kaew (Beverages)',
        stallLock: '26',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 7,
        menuName: 'Grilled Saba with Rice',
        price: '50',
        likes: 212,
        dislikes: 0,
        stallName: 'Eat 8 Ate',
        stallLock: '08',
        imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 8,
        menuName: 'Fried Rice Chicken',
        price: '25',
        likes: 120,
        dislikes: 0,
        stallName: 'Mr. Raw Fried Chicken (A La Carte)',
        stallLock: '22',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 9,
        menuName: 'Pandan Juice',
        price: '5',
        likes: 641,
        dislikes: 0,
        stallName: 'Toei Kaew (Beverages)',
        stallLock: '26',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 10,
        menuName: 'Grilled Saba with Rice',
        price: '50',
        likes: 212,
        dislikes: 0,
        stallName: 'Eat 8 Ate',
        stallLock: '08',
        imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 11,
        menuName: 'Fried Rice Chicken',
        price: '25',
        likes: 120,
        dislikes: 0,
        stallName: 'Mr. Raw Fried Chicken (A La Carte)',
        stallLock: '22',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
      {
        id: 12,
        menuName: 'Pandan Juice',
        price: '5',
        likes: 641,
        dislikes: 0,
        stallName: 'Toei Kaew (Beverages)',
        stallLock: '26',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
        typeCard: 'MenuCardinSaved' as const,
      },
  ];
  
  const mockSavedStallData = [
    {
      id: 1,
      rank: 1,
      stallName: 'Mr. Raw Fried Chicken',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
      location: '22',
      operatingHours: '10.30 - 14.30',
      priceRange: '5 - 25',
      tags: 'Fast Food',
      reviews: 87,
      likes: 2081,
      rating: 4.96,
    },
    {
      id: 2,
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
      id: 3,
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
    {
        id: 4,
        rank: 1,
        stallName: 'Mr. Raw Fried Chicken',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
        location: '22',
        operatingHours: '10.30 - 14.30',
        priceRange: '5 - 25',
        tags: 'Fast Food',
        reviews: 87,
        likes: 2081,
        rating: 4.96,
      },
      {
        id: 5,
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
        id: 6,
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
      {
        id: 7,
        rank: 1,
        stallName: 'Mr. Raw Fried Chicken',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
        location: '22',
        operatingHours: '10.30 - 14.30',
        priceRange: '5 - 25',
        tags: 'Fast Food',
        reviews: 87,
        likes: 2081,
        rating: 4.96,
      },
      {
        id: 8,
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
        id: 9,
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
      {
        id: 10,
        rank: 1,
        stallName: 'Mr. Raw Fried Chicken',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7s0v7yK-niQWaDUgGD6XU_N05_SyJ9j_IYISHPPFXWacLQ2DjadykH2m9NKSSHRyPO0&usqp=CAU',
        location: '22',
        operatingHours: '10.30 - 14.30',
        priceRange: '5 - 25',
        tags: 'Fast Food',
        reviews: 87,
        likes: 2081,
        rating: 4.96,
      },
      {
        id: 11,
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
        id: 12,
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
  const [activeTab, setActiveTab] = useState<'Food Stall' | 'Menu'>('Food Stall');
  const iconSize = 22;

  const renderContent = () => {
    if (activeTab === 'Food Stall') {
      return (
        <FlatList
          data={mockSavedStallData}
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
          key="stalls" // Unique key for FlatList
        />
      );
    }
    return (
      <FlatList
        data={mockSavedMenuData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuCard
            menuName={item.menuName}
            price={item.price}
            likes={item.likes}
            dislikes={item.dislikes}
            stallName={item.stallName}
            stallLock={item.stallLock}
            imageUrl={item.imageUrl}
            typeCard={item.typeCard}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.menuColumn}
        contentContainerStyle={styles.listContent}
        key="menus" // Unique key for FlatList
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
            Saved list{'  '}
        </Text>
        <View>
                  {/* Bookmark icon */}
                  <Ionicons name='bookmarks' size={iconSize} color='#006664'/>
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
          style={[styles.tab, activeTab === 'Food Stall' && styles.activeTab]}
          onPress={() => setActiveTab('Food Stall')}
        >
          <Text style={[styles.tabText, activeTab === 'Food Stall' && styles.activeTabText]}>
            Food Stall
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Menu' && styles.activeTab]}
          onPress={() => setActiveTab('Menu')}
        >
          <Text style={[styles.tabText, activeTab === 'Menu' && styles.activeTabText]}>Menu</Text>
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
    paddingBottom: 30, // Add space for the bottom navigation bar
  },
  menuColumn: {
    marginBottom: 6,
  },
  heartOverlay: {
    position: 'absolute',
  },
});

export default SavedScreen;
