// screens/HomeScreen.tsx

import React, { useState, useEffect, useCallback, useContext, useRef, Component } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path
import MenuCard from '../components/MenuCard'; // Adjust the path
import { MenuCardProps } from '../components/MenuCard';
import StallCard from '../components/StallCard'; // Adjust the path
import { StallCardProps } from '../components/StallCard';
import CategoryBar from '../components/CategoryBar';
import {
  IOScrollViewController,
  IOScrollView,
  InView,
  IOFlatList
} from 'react-native-intersection-observer';

import { APIContext } from '../App';
import getClient from '../api/gRPCClient';
import { TopMenuRequest, TopStallRequest, GetMenuListingsRequest, GetMenuListingsResponse, TopMenu, TopStall } from '../generated/data/index_pb';
import * as grpcweb from 'grpc-web';

interface MenuCardPropsExt extends MenuCardProps {
  id: string
};

interface StallCardPropsExt extends StallCardProps {
  id: string
};

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

  const apiHost = useContext(APIContext);
  const client = getClient(apiHost);

  const [topMenu, setTopMenu] = useState<MenuCardPropsExt[]>([]);
  const [topStall, setTopStall] = useState<StallCardPropsExt[]>([]);
  const [menuItems, setMenuItems] = useState<MenuCardPropsExt[]>([]);
  const [pageToken, setPageToken] = useState("");
  const [endOfPage, setEndOfPage] = useState(false);

  const retrieveItems = (token: string) => {
    if (endOfPage) return;
    if (menuItems.length > 40) {
      setEndOfPage(true);
      return;
    }

    const request = new GetMenuListingsRequest();
    request.setPageSize(12);
    token && request.setPageToken(token);
    
    client.indexGetMenuListings(request)
    .then((resp: GetMenuListingsResponse) => {
      setMenuItems([
        ...menuItems,
        ...resp.getItemsList().map<MenuCardPropsExt>((card) => {
          return {
            typeCard: "MenuCardinSaved",
            menuName: card.getItem()?.getName()?.getContent() || "",
            price: card.getItem()?.getPrice().toString() || "0",
            likes: card.getLikes(),
            dislikes: 0,
            stallName: card.getStallName()?.getContent() || "",
            stallLock: card.getStallLock().toString(),
            imageUrl: card.getItem()?.getImage() || "",
            id: card.getItem()?.getUuid()!!
          }
        })
      ]);
      setPageToken(resp.getNextPageToken());
    })
    .catch((err: grpcweb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
      setEndOfPage(true);
    });
  }

  const isNext = (id: string) => {
    if (pageToken == id) {
      retrieveItems(pageToken);
    }
  }

  const scrollViewRef = useRef<IOScrollViewController>(null);

  const init = () => {
    retrieveItems("");

    var request = new TopMenuRequest();
    client.indexTopMenu(request).then((resp: TopMenu) => {
      setTopMenu(resp.getItemsList().map<MenuCardPropsExt>((card) => {
        return {
          typeCard: 'MenuCardinHome',
          menuName: card.getItem()?.getItem()?.getName()?.getContent()!!,
          price: card.getItem()?.getItem()?.getPrice().toString() || "0",
          likes: card.getItem()?.getLikes()!!,
          dislikes: 0,
          stallName: card.getItem()?.getStallName()?.getContent() || "",
          stallLock: card.getItem()?.getStallLock().toString()!!,
          imageUrl: card.getItem()?.getItem()?.getImage() || "",
          id: card.getItem()?.getItem()?.getUuid()!!
        }
      }))
    });

    var request = new TopStallRequest();
    client.indexTopStall(request).then((resp: TopStall) => {
      setTopStall(resp.getStallsList().map<StallCardPropsExt>((card) => {
        return {
          rank: card.getRank()!!,
          stallName: card.getStall()?.getStall()?.getName()?.getContent()!!,
          imageUrl: card.getStall()?.getStall()?.getImage()!!,
          location: card.getStall()?.getStall()?.getLock()!!.toString() || "",
          operatingHours: '7.30 - 16.30',
          priceRange: `${card.getStall()?.getMinPrice()!!} - ${card.getStall()?.getMaxPrice()!!}`,
          tags: card.getStall()?.getStall()?.getDishType()?.getContent()!!,
          reviews: card.getStall()?.getReviewCount()!!,
          likes: card.getStall()?.getLikeCount()!!,
          rating: card.getStall()?.getRating()!!,
          id: card.getStall()?.getStall()?.getUuid()!!
        }
      }))
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      {/* 
        NOTE: We pass a prop to SearchBar so it navigates
        to SearchScreen when the user taps the TextInput.
      */}
      <SearchBar isOnHomeScreen />

      <IOScrollView ref={scrollViewRef} contentContainerStyle={styles.content}>
        {/* Category Bar */}
        <CategoryBar />

        {/* Recommended Menus Section */}
        {/* <View style={styles.section}>
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
        </View> */}

        {/* Top like Menu from Eater! */}
        <View style={styles.section}>
          <View style={styles.sectionEater}>
            <Text style={styles.sectionTitle}>Top like Menu from</Text>
            <Text style={styles.eater}> Eater!</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topMenu.map((menu) => (
              <MenuCard
                key={menu.id}
                {...menu}
              />
            ))}
          </ScrollView>
        </View>

        {/* You may Love these Food Stalls! */}
        {/* <View style={styles.section}>
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
        </View> */}

        {/* Popular Stalls Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Stalls in Bar Mai</Text>
          {topStall.map((stall) => (
            <StallCard
              key={stall.id}
              {...stall}
            />
          ))}
        </View>

        <View style={styles.remains}>
          <Text style={styles.sectionTitle}>...or browse</Text>
          <IOFlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key="listings"
            renderItem={({item}) => {
              return <InView onChange={(b) => {
                if (b) { 
                  isNext(item.id);
                }
                }}>
                <MenuCard {...item}/> 
              </InView>
            }}
            maxToRenderPerBatch={6}
            scrollEnabled={false}
          />
        </View>
      </IOScrollView>
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
  remains: {
    paddingTop: 12
  }
});
