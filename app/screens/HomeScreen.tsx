// screens/HomeScreen.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'; // Adjust the path
import CategoryBar from '../components/CategoryBar';
import MenuCardHorizontal from '../components/MenuCardHorizontal';
import StallCardList from '../components/StallCardList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { useSearch } from '../context/SearchContext';
import { firstRecommends, getHomeForYou, getHomeTopLikeMenu, getHomeTopStall, getUserPreference, moreRecommendations } from '../api/services/mainService';
import MenuCard, { MenuCardProps } from '../components/MenuCard';
import { UserPreferences, useUserPreferences } from '../context/UserPreferencesContext';
import { StallCardProps } from '../components/StallCard';
import MenuCardGrid from '../components/MenuCardGrid';

type  HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { preferences, updatePreferences } = useUserPreferences();
  const { addHistory } = useSearch();

  const [ topLikeData, setTopLikeData ] = useState<MenuCardProps[]>([]);
  const [ topStallData, setTopStallData ] = useState<StallCardProps[]>([]);
  const [ forYouData, setForYouData ] = useState<MenuCardProps[]>([]);
  const [ becauseYouLikeData, setbecauseYouLikeData ] = useState<MenuCardProps[]>([]);
  const [ textLike, setTextLike ] = useState<string>("");

  const [ recommendations, setRecommendations ] = useState<MenuCardProps[]>([]);
  const [ nextPageToken, setNextPageToken ] = useState<string>("");
  const [ scoreToken, setScoreToken ] = useState<string>("");
  const [ endOfPage, setEndOfPage ] = useState<boolean>(false);

  useEffect(() => {
    // fetch all once
    fetchData();
    syncPreferences();
  }, []);

  const syncPreferences = () => {
    getUserPreference().then((pref) => {
      updatePreferences("userID", pref.userID);
      updatePreferences("gmail", pref.gmail);
      updatePreferences("username", pref.username);
      updatePreferences("role", pref.role);
      updatePreferences("gender", pref.gender);
      updatePreferences("dietaryPreferences", pref.dietaryPreferences);
      updatePreferences("allergies", pref.allergies);
      updatePreferences("favoriteCuisines", pref.favoriteCuisines);
      updatePreferences("dislikedIngredients", pref.dislikedIngredients);
      updatePreferences("favoriteDishes", pref.favoriteDishes);
    });
  }

  const fetchData = () => {
    // fetch the banners and first part of recommendations
    getHomeTopLikeMenu().then(
      (menus) => {
        setTopLikeData(menus);
      },
      (e) => {
        setTopLikeData([]);
      }
    )
    getHomeTopStall().then(
      (stalls) => {
        setTopStallData(stalls);
      },
      (e) => {
        setTopStallData([]);
      }
    )
    getHomeForYou().then(
      (menus) => {
        setForYouData(menus);
      },
      (e) => {
        setForYouData([]);
      }
    )
    // TODO: Add because you like later,
    firstRecommends().then(
      (resp) => {
        setRecommendations(resp.menus);
        if (!resp.nextPageToken) {
          setEndOfPage(true);
        }
        setNextPageToken(resp.nextPageToken);
        if (resp.scoreToken) {
          setScoreToken(resp.scoreToken);
        }
      },
      (e) => {
        setRecommendations([]);
      }
    )
  };

  const continueRec = (nextPage: string, score: string) => {
    moreRecommendations(nextPage, score).then(
      (resp) => {
        setRecommendations([...recommendations,...resp.menus]);
        if (!resp.nextPageToken) {
          setEndOfPage(true);
        }
        setNextPageToken(resp.nextPageToken);
        if (resp.scoreToken) {
          setScoreToken(resp.scoreToken);
        }
      },
      (e) => {
        setRecommendations([]);
      }
    )
  };

  const handleEndReached = () => {
    if (!endOfPage) {
      continueRec(nextPageToken, scoreToken);
    }
  }

  const handleCategoryPress = (categoryName: string) => {
    addHistory(categoryName);
    navigation.navigate('SearchResultScreen', { query: categoryName });
  };

  const isCloseToBottom = (obj: any) => {
    const paddingToBottom = 35; // how many pixels from the bottom to trigger the event
    return obj.layoutMeasurement.height + obj.contentOffset.y >= 
      obj.contentSize.height - paddingToBottom;
  };

  return (
    <View style={styles.container}>

      <SearchBar isOnHomeScreen />

      <ScrollView contentContainerStyle={styles.content} onScroll={
        ({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            handleEndReached();
          }
        }
      } scrollEventThrottle={32}>
        {/* Category Bar */}
        <CategoryBar onCategorySelect={handleCategoryPress} />

        {/* Recommended Menus Section */}
        {/* gRPC: for you route */}
        <View style={styles.section}>
          <MenuCardHorizontal
            menus={forYouData}
            title='Recommended Menus for You!'
          />
        </View>

        {/* Top like Menu from Eater! */}
        <View style={styles.section}>
          <MenuCardHorizontal
            menus={topLikeData}
            customTitleComponent={
              <View style={styles.sectionEater}>
                <Text style={styles.sectionTitle}>Top like Menu from</Text>
                <Text style={styles.eater}> Eater!</Text>
              </View>
            }
          />
        </View>

        {/* Popular Stalls Section */}
        <View style={styles.section}>
          <StallCardList
            data={topStallData}
            scrollEnabled={false}
            title="Popular Stalls in Bar Mai"
          />
        </View>

        <View style={styles.section}>
          <MenuCardGrid data={recommendations}/>
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
    fontWeight: '700',
    marginBottom: 8,
    color: '#006664',
    marginTop: 16,
    marginHorizontal: 16,
    marginRight: 0,
  },
  scrollView: {
    flexDirection: 'row',
    paddingLeft: 8,
    gap: 8
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
    marginHorizontal: 0
  },
});
