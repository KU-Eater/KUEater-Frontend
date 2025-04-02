// screens/SearchResultScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import StallCard, { StallCardProps } from '../components/StallCard';
import MenuCard, { MenuCardProps } from '../components/MenuCard';
import MenuCardGrid from '../components/MenuCardGrid';
import StallCardList from '../components/StallCardList';
import { performSearch } from '../api/services/mainService';

const SearchResultScreen = () => {
  const route = useRoute();
  // extract 'query' passed from SearchScreen
  const query = (route.params as any)?.query || '';
  const [ menuResults, setMenuResults ] = useState<MenuCardProps[]>([]);
  const [ stallResults, setStallResults ] = useState<StallCardProps[]>([]);

  useEffect(() => {
    performSearch(query).then(
      (obj) => {
        setMenuResults(obj.menus);
        setStallResults(obj.stalls);
      }
    )
  }, [])

  // local state for active tab
  const [activeTab, setActiveTab] = useState<'Food Stall' | 'Menu'>('Menu');
  const renderContent = () => {
    if (activeTab === 'Food Stall') {
      return <StallCardList data={stallResults} />;
    }
    return <MenuCardGrid data={menuResults} />;
  };
  return (
    <View style={styles.container}>
      {/* Reuse your SearchBar at the top */}
      <SearchBar />

      {/* Possibly show the user's search query */}
      {/* <View style={styles.background}>
        <Text style={styles.searchQueryText}>
          Showing results for: <Text style={{ fontWeight: 'bold' }}>{query}</Text>
        </Text>
      </View> */}
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

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5F0',
  },
  searchQueryText: {
    fontSize: 14,
    color: '#006664',

  },
  background: {
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
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
    paddingTop: 16
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