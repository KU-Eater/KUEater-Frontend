import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import StallCard, { StallCardProps } from '../components/StallCard'; // Adjust the path
import MenuCard, { MenuCardProps } from '../components/MenuCard'; // Adjust the path
import { Ionicons } from '@expo/vector-icons';
import BookmarkHeartIcon from '../components/NavBar';
import MenuCardGrid from '../components/MenuCardGrid';
import StallCardList from '../components/StallCardList';
import { getSavedItems, getSavedStalls } from '../api/services/mainService';

const SavedScreen = () => {
  const [activeTab, setActiveTab] = useState<'Food Stall' | 'Menu'>('Menu');
  const iconSize = 22;

  const [ menu, setMenu ] = useState<MenuCardProps[]>([]);
  const [ stall, setStall ] = useState<StallCardProps[]>([]);

  useEffect(() => {
    getSavedItems().then(
      (lst) => setMenu(lst)
    );
    getSavedStalls().then(
      (lst) => setStall(lst)
    );
  }, [activeTab]);

  const renderContent = () => {
    if (activeTab === 'Food Stall') {
      return <StallCardList data={stall} />;
    }
    return <MenuCardGrid data={menu} />;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Saved list{'  '}
        </Text>
        <View>

          {/* <BookmarkHeartIcon/> */}
          {/* Bookmark icon */}
          <Ionicons name='bookmarks' size={iconSize} color='#006664' />
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
      <View style={styles.content}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {renderContent()}
        </ScrollView>
      </View>
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

export default SavedScreen;
