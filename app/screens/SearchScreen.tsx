// SearchScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Adjust for your actual RootStackParamList
type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  SearchResultScreen: { query: string };
  // ... any others
};

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Text input state
  const [searchText, setSearchText] = useState('');

  // Language toggle
  const [language, setLanguage] = useState('ENG 🇬🇧');
  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ENG 🇬🇧' ? 'THA 🇹🇭' : 'ENG 🇬🇧'));
  };

  // Mock data for search history and suggestions
  const [searchHistory, setSearchHistory] = useState<string[]>([
    'ข้าวปลาซาบะย่าง',
    'ชานมไข่มุก',
    'อาหารคลีน',
    'เคบับ',
    'กะเพราหมูกรอบ',
  ]);
  const searchSuggestions = [
    'Healthy',
    'Fish',
    'Grilled Fish',
    'Saba Teriyaki',
    'Clean Food',
    'Fish Steak',
  ];

  // Clear the search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  // Perform a search (navigate to SearchResultScreen)
  const handleSearch = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    navigation.navigate('SearchResultScreen', { query: trimmed });
  };

  return (
    <View style={styles.container}>
      {/* 
        =========================
        TOP ROW: location, logo, language
        Same style as your HomeScreen SearchBar
        =========================
      */}
      <View style={styles.topRow}>
        {/* Location (left) */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={15} color="#B33E3E" />
          <Text style={styles.locationText}>Bar Mai</Text>
        </View>

        {/* Centered Logo */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/KU-Eater/KUEater-Frontend/refs/heads/base-gui/app/assets/logo_home.png',
          }}
          style={styles.logo}
        />

        {/* Language Switch (right) */}
        <TouchableOpacity onPress={handleLanguageToggle} style={styles.languageSwitch}>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>

        </View>
      

      {/*
        =========================
        SEARCH BAR ROW
        Left: Teal arrow
        Middle: TextInput
        Right: Teal circle w/ white search icon
        =========================
      */}
      <View style={styles.searchBarContainer}>
        {/* Teal Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <Ionicons name="arrow-back-outline" size={20} color="#006664" />
        </TouchableOpacity>

        {/* TextInput */}
        <TextInput
          style={styles.searchInput}
          placeholder=""
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={() => handleSearch(searchText)}
          returnKeyType="search"
        />

        {/* Teal circle + white search icon */}
        <TouchableOpacity
          style={styles.searchIconCircle}
          onPress={() => handleSearch(searchText)}
        >
          <Ionicons name="search-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      

      {/*
        =========================
        MAIN CONTENT: 
        Search History & Suggestions
        =========================
      */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Search History */}
        <View style={styles.historyContainer}>
          {searchHistory.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSearch(item)}
              style={styles.historyItem}
            >
              <Text style={styles.historyText}>{item}</Text>
            </TouchableOpacity>
          ))}

          {searchHistory.length > 0 && (
            <TouchableOpacity onPress={clearSearchHistory}>
              <Text style={styles.clearHistoryText}>Clear Search History</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Search Suggestions */}
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Search Suggestions</Text>
          <View style={styles.suggestionsGrid}>
            {searchSuggestions.map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSearch(suggestion)}
                style={styles.suggestionItem}
              >
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // =========== TOP ROW (same as your HomeScreen SearchBar) ===========
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 30,
    paddingHorizontal: 14,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationContainer: {
    position: 'absolute',
    left: 14,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    marginLeft: 2,
    color: '#333',
    fontWeight: '500',
  },
  logo: {
    width: 160,
    height: 95,
    marginTop: -25,
  },
  languageSwitch: {
    position: 'absolute',
    right: 14,
    top: 0,
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B1AEAE',
  },
  languageText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#3A3838',
  },

  // =========== SEARCH BAR ROW ===========
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    height: 40,
    paddingHorizontal: 8,
    marginHorizontal: 14,
    marginTop: 6,
    marginBottom: 10,
  },
  arrowContainer: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  searchIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#006664',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },

  // =========== MAIN CONTENT ===========
  contentContainer: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },

  // =========== SEARCH HISTORY ===========
  historyContainer: {
    backgroundColor: '#FAF5F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  historyItem: {
    paddingVertical: 8,
  },
  historyText: {
    fontSize: 14,
    color: '#006664',
  },
  clearHistoryText: {
    marginTop: 8,
    fontSize: 12,
    color: '#B33E3E',
    textDecorationLine: 'underline',
  },

  // =========== SUGGESTIONS ===========
  suggestionsContainer: {
    backgroundColor: '#FAF5F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006664',
    marginBottom: 8,
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  suggestionItem: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 4,
  },
  suggestionText: {
    fontSize: 14,
    color: '#006664',
  },
});
