import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path as needed
import StallCard from '../components/StallCard'; // Adjust the path as needed
import MenuCard from '../components/MenuCard'; // Adjust the path as needed
import NavBar from '../components/NavBar'; // Adjust the path as needed

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Recommended Menus Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommends Menus for you!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MenuCard
                        menuName="Grilled Saba with Rice"
                        stallName="Eat 8 Ate"
                        price="40 ฿"
                        likes={212}
                        dislikes={10}
                        imageUrl="https://example.com/saba.jpg" // Replace with your image URL
                        type={'MenuCardinHome'}            />
            <MenuCard
                          menuName="Fried Rice Chicken"
                          stallName="Mr. Rice"
                          price="50 ฿"
                          likes={120}
                          dislikes={5}
                          imageUrl="https://example.com/friedrice.jpg" // Replace with your image URL
                          type={'MenuCardinHome'}            />
            <MenuCard
                          menuName="Pandan Juice"
                          stallName="Toei Kaew (Beverages)"
                          price="5 ฿"
                          likes={641}
                          dislikes={20}
                          imageUrl="https://example.com/pandan.jpg" // Replace with your image URL
                          type={'MenuCardinHome'}            />
          </ScrollView>
        </View>

        {/* Top Like Menu Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top like Menu from the EATER!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MenuCard
                          menuName="Fried Chicken Thigh"
                          stallName="Mr. Raw Fried Chicken"
                          price="25 ฿"
                          likes={1200}
                          dislikes={30}
                          imageUrl="https://example.com/chickenthigh.jpg" // Replace with your image URL
                          type={'MenuCardinHome'}            />
            <MenuCard
                          menuName="Pandan Juice"
                          stallName="Toei Kaew (Beverages)"
                          price="5 ฿"
                          likes={641}
                          dislikes={20}
                          imageUrl="https://example.com/pandan.jpg" // Replace with your image URL
                          type={'MenuCardinHome'}            />
            <MenuCard
                          menuName="Crispy Pork Basil"
                          stallName="Pa Chuai (One-dish Meals)"
                          price="40 ฿"
                          likes={500}
                          dislikes={15}
                          imageUrl="https://example.com/porkbasil.jpg" // Replace with your image URL
                          type={'MenuCardinHome'}            />
          </ScrollView>
        </View>

        {/* Popular Stalls Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Stall in Bar Mai</Text>
          <StallCard
            rank={1}
            stallName="Mr. Raw Fried Chicken"
            imageUrl="https://example.com/mrraw.jpg" // Replace with your image URL
            location="22"
            operatingHours="10.30 - 14.30"
            priceRange="5 - 25"
            tags="Fast Food"
            reviews={87}
            likes={2081}
            rating={4.96}
          />
          <StallCard
            rank={2}
            stallName="Toei Kaew (Beverages)"
            imageUrl="https://example.com/toei.jpg" // Replace with your image URL
            location="37"
            operatingHours="07.00 - 17.30"
            priceRange="5 - 40"
            tags="Beverages"
            reviews={119}
            likes={1678}
            rating={4.92}
          />
          <StallCard
            rank={3}
            stallName="Pilin Local North"
            imageUrl="https://example.com/pilin.jpg" // Replace with your image URL
            location="22"
            operatingHours="07.30 - 15.30"
            priceRange="35 - 60"
            tags="Thai"
            reviews={43}
            likes={1264}
            rating={4.89}
          />
        </View>
      </ScrollView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  content: {
    paddingBottom: 60, // Leave space for the nav bar
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
