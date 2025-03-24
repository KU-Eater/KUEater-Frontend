// components/SearchBar.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  SearchResultScreen: { query: string };
  // ... any others
};

interface SearchBarProps {
  isOnHomeScreen?: boolean; // if true => inactive style
}



const SearchBar: React.FC<SearchBarProps> = ({ isOnHomeScreen }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // We'll keep a local search text state, in case you want to type in the active style
  const [searchText, setSearchText] = useState('');

  // Language toggle
  const [language, setLanguage] = useState('ENG 🇬🇧');
  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ENG 🇬🇧' ? 'THA 🇹🇭' : 'ENG 🇬🇧'));
  };

  // On HomeScreen, tapping the TextInput navigates to SearchScreen
  const handleFocus = () => {
    if (isOnHomeScreen) {
      navigation.navigate('SearchScreen');
    }
  };

  // For the active style (if we want a back arrow or a search action)
  const handleBack = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    // In the active style, you might navigate to results or do something else
    const trimmed = searchText.trim();
    if (!trimmed) return;
    navigation.navigate('SearchResultScreen', { query: trimmed });
  };

  return (
    <View style={styles.container}>
      {/* Top Row - Location, Logo, Language (same for both) */}
      <View style={styles.topRow}>
        {/* Location (Left-aligned) */}
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

        {/* Language Switch (Right-aligned) */}
        <TouchableOpacity onPress={handleLanguageToggle} style={styles.languageSwitch}>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>
      </View>

      {/* 
        Search Bar Container 
        We'll keep the same container style, but conditionally render 
        the "inactive" vs "active" layout inside.
      */}
      {isOnHomeScreen ? (
        // =============== INACTIVE STYLE (Home Screen) ===============
        <View style={styles.inactiveSearchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Try searching for menu or food stall"
            placeholderTextColor="#999"
            onFocus={handleFocus}
          />
        </View>
      ) : (
        // =============== ACTIVE STYLE (Search or Result Screen) ===============
        <View style={styles.activeSearchContainer}>
          {/* Back Arrow (left) */}
          <TouchableOpacity onPress={handleBack} style={styles.arrowContainer}>
            <Ionicons name="arrow-back-outline" size={20} color="#999" />
          </TouchableOpacity>

          {/* TextInput (middle) */}
          <TextInput
            style={styles.activeSearchInput}
            placeholder="สตอเบอรี่ปั่น"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />

          {/* Teal Circle with White Search Icon (right) */}
          <TouchableOpacity style={styles.searchIconCircle} onPress={handleSearch}>
            <Ionicons name="search-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  // Overall container for top row + search bar
  container: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  /* =================== TOP ROW =================== */
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 30,
  },
  locationContainer: {
    position: 'absolute',
    left: 0,
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
    right: 0,
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

  /* =================== INACTIVE SEARCH BAR (Home) =================== */
  inactiveSearchContainer: {
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },

  /* =================== ACTIVE SEARCH BAR (Search Screen) =================== */
  activeSearchContainer: {
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 12,
  },
  arrowContainer: {
    marginRight: 8,
  },
  activeSearchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  searchIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#006664',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
