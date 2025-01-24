import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import StallCard from '../components/StallCard'; // Adjust the path
import NavBar from '../components/NavBar'; // Adjust the path




const mockMenuData = [
  {
    id: 1,
    menuName: 'Grilled Saba with Rice',
    price: '40',
    likes: 212,
    stallName: 'Eat 8 Ate',
    imageUrl: 'https://example.com/saba.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 2,
    menuName: 'Fried Rice Chicken',
    price: '50',
    likes: 120,
    stallName: 'Mr. Rice',
    imageUrl: 'https://example.com/friedrice.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
  {
    id: 3,
    menuName: 'Pandan Juice',
    price: '5',
    likes: 641,
    stallName: 'Toei Kaew (Beverages)',
    imageUrl: 'https://example.com/pandan.jpg',
    typeCard: 'MenuCardinHome' as const,
  },
];

const mockStallData = [
  {
    id: 1,
    rank: 1,
    stallName: 'Mr. Raw Fried Chicken',
    imageUrl: 'https://example.com/mrraw.jpg',
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
    imageUrl: 'https://example.com/toei.jpg',
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
    imageUrl: 'https://example.com/pilin.jpg',
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
    // <View style={styles.container}>
    //       <Text style={styles.text}>Home Screen Debug</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#f7f7f7',
//     },
//     text: {
//       fontSize: 18,
//       fontWeight: '600',
//       color: '#333',
//     },
//   });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  content: {
    paddingBottom: 80, // Space for the navigation bar
  },
  section: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
});

export default HomeScreen;
