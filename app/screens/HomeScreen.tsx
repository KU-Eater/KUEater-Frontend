import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import StallCard from '../components/StallCard'; // Adjust the path
import CategoryBar from '../components/CategoryBar';



const mockMenuData = [
  {
    id: 1,
    menuName: 'Grilled Saba with Rice',
    price: '40',
    likes: 212,
    stallName: 'Eat 8 Ate',
    imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 2,
    menuName: 'Fried Rice Chicken',
    price: '50',
    likes: 120,
    stallName: 'Mr. Rice',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDmete-M3ba2oCyVLZIcH2oDh7QQSz-UtoA&s',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 3,
    menuName: 'Pandan Juice',
    price: '5',
    likes: 641,
    stallName: 'Toei Kaew (Beverages)',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOe2ocJeXunMXXQTQmNWDRlBVDXmt4ZYwdA&s',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViFBap0GFwruy1uLRTbA1Z9yBY3cIjLbMYg&s',
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
      {/* Search Bar */}
      <SearchBar />


      {/* Main Content */}
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
                stallName={menu.stallName}
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
                stallName={menu.stallName}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    paddingBottom: 20, // Space for the navigation bar
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

export default HomeScreen;
