// screens/StallProfileScreen.tsx
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,FlatList} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuCard from '../components/MenuCard'; // Adjust the path




interface StallData {
  stallName: string;
  imageUrl: string;
  location: string;
  operatingHours: string;
  priceRange: string;
  tags: string;
  reviews: number;
  likes: number;
  rating: number;
}

type RouteParams = {
  stallData: StallData;
};

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
    typeCard: 'MenuCardinStall' as const,
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
    typeCard: 'MenuCardinStall' as const,
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
    typeCard: 'MenuCardinStall' as const,
  },
  {
      id: 4,
      menuName: 'Grilled Saba with Rice',
      price: '50',
      likes: 212,
      dislikes: 0,
      stallName: 'Eat 8 Ate',
      stallLock: '08',
      imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2019/02/Saba-Shioyaki-I-1.jpg',
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
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
      typeCard: 'MenuCardinStall' as const,
    },
];


const StallProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { stallData } = route.params as RouteParams;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleSharePress = () => {
    setIsShared(!isShared);
  };

  // Create a header component so FlatList can handle scrolling
  const renderHeader = () => (
    <>
      {/* Banner Container */}
      <View style={styles.bannerContainer}>
        <Image source={{ uri: stallData.imageUrl }} style={styles.bannerImage} />

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={26} color="#006664" />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleSharePress}>
          <Ionicons name="share-social" size={26} color="#006664" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Stall Name + Bookmark */}
        <View>
          <Text style={styles.stallName}>{stallData.stallName}</Text>

          <TouchableOpacity
            style={styles.bookmarkButton}
            onPress={handleBookmarkPress}
          >
            <Ionicons
              name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
              size={26}
              color={isBookmarked ? '#006664' : '#C1C1C1'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Rating & Review */}
        <TouchableOpacity style={styles.ratingRow}>
          <Ionicons name="star" size={18} color="#D49E3A" />
          <Text style={styles.ratingText}>{stallData.rating.toFixed(2)}</Text>
          <Text style={styles.reviewText}> • Rating and Review this Stall</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Operating Hours */}
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Ionicons name="calendar" size={18} color="#777" />
            <Text style={styles.infoText}>Monday - Sunday</Text>
          </View>
          <View style={styles.infoColumn}>
            <Ionicons name="time" size={18} color="#777" />
            <Text style={styles.infoText}>{stallData.operatingHours}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Location */}
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <FontAwesome5 name="store" size={16} color="#777" />
            <Text style={styles.infoText}>{stallData.location}</Text>
          </View>
          <View style={styles.infoColumn}>
            <Ionicons name="location" size={18} color="#777" />
            <Text style={styles.infoText}>Bar Mai</Text>
            <TouchableOpacity>
              <Text style={styles.googleMaps}>Google Map →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Price & Tags */}
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Ionicons name="logo-bitcoin" size={18} color="#777" />
            <Text style={styles.infoText}>{stallData.priceRange} Baht</Text>
          </View>
          <View style={styles.infoColumn}>
            <Ionicons name="pricetags" size={18} color="#777" />
            <Text style={styles.infoText}>{stallData.tags}</Text>
          </View>
        </View>
      </View>

      {/* Optional divider before menu list */}
      <View style={styles.divider} />
    </>
  );

  // Render each menu card item
  const renderMenuItem = ({ item }: any) => (
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
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockSavedMenuData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMenuItem}
        numColumns={2}
        columnWrapperStyle={styles.menuColumn}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={renderHeader}  // <-- Use ListHeaderComponent here
      />
    </View>
  );
};

export default StallProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  bannerContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 36,
    left: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 6,
  },
  shareButton: {
    position: 'absolute',
    top: 36,
    right: 16,
    backgroundColor: '#FAF5F0',
    borderRadius: 20,
    padding: 6,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 22,
    right: 16,
    padding: 8,
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  stallName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginLeft: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginLeft: 14,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#777',
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginLeft: 14,
  },
  infoColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#555',
  },
  googleMaps: {
    fontSize: 7,
    color: '#006664',
    textDecorationLine: 'underline',
    marginLeft: 6,
    marginTop: 5,
  },
  listContent: {
    paddingBottom: 30,
  },
  menuColumn: {
    marginBottom: 6,
  },
});