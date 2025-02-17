// screens/HomeScreen.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import StallCard from '../components/StallCard'; // Adjust the path
import CategoryBar from '../components/CategoryBar';

// --- your mock data remains the same
const mockMenuData = [
  {
    id: 1,
    menuName: 'Rice with crispy pork and Chinese kale',
    price: '50',
    likes: 75,
    dislikes: 3,
    stallName: 'Nong Pim A LA CARTE (Stir Fry)',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355627/02027_cg98ot.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 2,
    menuName: 'Grilled Saba with Rice',
    price: '50',
    likes: 212,
    dislikes: 0,
    stallName: 'Eat 8 Ate',
    stallLock: '08',
    imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 3,
    menuName: 'Fried Rice Chicken',
    price: '25',
    likes: 120,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 4,
    menuName: 'Pandan Juice',
    price: '5',
    likes: 641,
    dislikes: 0,
    stallName: 'Toei Kaew (Beverages)',
    stallLock: '26',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 5,
    menuName: 'Dry Thai sukiyaki with seafood',
    price: '50',
    likes: 75,
    dislikes: 3,
    stallName: 'Nong Pim A LA CARTE (Stir Fry)',
    stallLock: '02',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739355624/02022_apuaa1.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
];

const mockStallData = [
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
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* 
        NOTE: We pass a prop to SearchBar so it navigates
        to SearchScreen when the user taps the TextInput.
      */}
      <SearchBar isOnHomeScreen />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Category Bar */}
        <CategoryBar />

        {/* Recommended Menus Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Menus for You!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockMenuData.map((menu) => (
              <MenuCard
                key={menu.id}
                menuName={menu.menuName}
                price={menu.price}
                likes={menu.likes}
                dislikes={menu.dislikes}
                stallName={menu.stallName}
                stallLock={menu.stallLock}
                imageUrl={menu.imageUrl}
                typeCard={menu.typeCard}
              />
            ))}
          </ScrollView>
        </View>

        {/* Top like Menu from Eater! */}
        <View style={styles.section}>
          <View style={styles.sectionEater}>
            <Text style={styles.sectionTitle}>Top like Menu from</Text>
            <Text style={styles.eater}> Eater!</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockMenuData.map((menu) => (
              <MenuCard
                key={menu.id}
                menuName={menu.menuName}
                price={menu.price}
                likes={menu.likes}
                dislikes={menu.dislikes}
                stallName={menu.stallName}
                stallLock={menu.stallLock}
                imageUrl={menu.imageUrl}
                typeCard={menu.typeCard}
              />
            ))}
          </ScrollView>
        </View>

        {/* You may Love these Food Stalls! */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You may Love these Food Stalls!</Text>
          {mockStallData.map((stall) => (
            <StallCard
              key={stall.id}
              rank={stall.rank}
              stallName={stall.stallName}
              imageUrl={stall.imageUrl}
              location={stall.location}
              operatingHours={stall.operatingHours}
              priceRange={stall.priceRange}
              tags={stall.tags}
              reviews={stall.reviews}
              likes={stall.likes}
              rating={stall.rating}
            />
          ))}
        </View>

        {/* Popular Stalls Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Stalls in Bar Mai</Text>
          {mockStallData.map((stall) => (
            <StallCard
              key={stall.id}
              rank={stall.rank}
              stallName={stall.stallName}
              imageUrl={stall.imageUrl}
              location={stall.location}
              operatingHours={stall.operatingHours}
              priceRange={stall.priceRange}
              tags={stall.tags}
              reviews={stall.reviews}
              likes={stall.likes}
              rating={stall.rating}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingBottom: 20,
  },
  section: {
    marginTop: 12,
    backgroundColor: '#FAF5F0',
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#006664',
    marginTop: 16,
    marginHorizontal: 16,
    marginRight: 0,
  },
  eater: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8,
    color: '#004442',
    marginTop: 16,
  },
  sectionEater: {
    flexDirection: 'row',
  },
});
