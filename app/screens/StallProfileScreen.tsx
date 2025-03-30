// screens/StallProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import MenuCard from '../components/MenuCard'; // Adjust the path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { StallData } from '../api/dataTypes';
import MenuCardGrid from '../components/MenuCardGrid';



type RouteParams = {
  stallData: StallData;
};

const mockStallMenuData = [
  {
    id: 1,
    menuName: 'Deep-fried battered chicken thigh',
    price: '25',
    likes: 956,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22001_hsn5yx.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 2,
    menuName: 'Deep-fried battered chicken drumstick',
    price: '18',
    likes: 641,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22002_agofym.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 3,
    menuName: 'Sticky rice',
    price: '5',
    likes: 92,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22003_aggstb.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 4,
    menuName: 'White rice',
    price: '10',
    likes: 44,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721436/22004_uh1ykb.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 5,
    menuName: 'Hainanese rice',
    price: '10',
    likes: 68,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721436/22005_gzh7co.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 1,
    menuName: 'Deep-fried battered chicken thigh',
    price: '25',
    likes: 956,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22001_hsn5yx.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 2,
    menuName: 'Deep-fried battered chicken drumstick',
    price: '18',
    likes: 641,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22002_agofym.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 3,
    menuName: 'Sticky rice',
    price: '5',
    likes: 92,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721435/22003_aggstb.jpg',
    typeCard: 'MenuCardinStall' as const,
  },
  {
    id: 4,
    menuName: 'White rice',
    price: '10',
    likes: 44,
    dislikes: 0,
    stallName: 'Mr. Raw Fried Chicken (A La Carte)',
    stallLock: '22',
    imageUrl: 'https://res.cloudinary.com/dejzapat4/image/upload/v1739721436/22004_uh1ykb.jpg',
    typeCard: 'MenuCardinStall' as const,
  },

];


type StallProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'StallProfile'>;

const StallProfileScreen: React.FC = () => {
  const navigation = useNavigation<StallProfileScreenNavigationProp>();
  const route = useRoute();
  const { stallData } = route.params as RouteParams;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const handleBookmarkPress = () => setIsBookmarked(!isBookmarked);
  const handleSharePress = () => setIsShared(!isShared);
  const handleReview = () => navigation.navigate("ReviewRating");

  const renderHeader = () => (
    <>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: stallData.imageUrl }} style={styles.bannerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#006664" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={handleSharePress}>
          <Ionicons name="share-social" size={26} color="#006664" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        
        <View style={styles.stallNameContainer}>
          <Text style={styles.stallName}>{stallData.stallName}</Text>

          <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmarkPress}>
            <Ionicons name="bookmark" size={35} color={isBookmarked ? '#006664' : '#D0CECE'} />
          </TouchableOpacity>

        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.ratingRow} onPress={handleReview}>
          <Ionicons name="star" size={18} color="#D49E3A" />
          <Text style={styles.ratingText}>{stallData.rating.toFixed(2)}</Text>
          <Text style={styles.reviewText}> • Rating and Review this Stall</Text>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <View style={styles.divider} />

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



      <Text style={styles.menus}>Menus</Text>
    </>
  );

  return (

    <View style={styles.container}>
      <ScrollView>{renderHeader()}
        <MenuCardGrid data={mockStallMenuData} showStallName={false} scrollEnabled={false} />
      </ScrollView>

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
  bookmarkButton: {
    padding: 8,
    paddingRight: 16,
    paddingTop: 10
  },
  stallNameContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  menus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006664',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 10
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