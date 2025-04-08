import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSearch } from '../context/SearchContext';

type RootStackParamList = {
  MainTab: undefined;
  SearchScreen: undefined;
  SearchResultScreen: { query: string };
};

interface SearchBarProps {
  isOnHomeScreen?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOnHomeScreen }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  const { addHistory } = useSearch();

  const [language, setLanguage] = useState('ENG 🇬🇧');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const query = (route.params as any)?.query;
    if (query) setSearchText(query);
  }, [route.params]);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ENG 🇬🇧' ? 'THA 🇹🇭' : 'ENG 🇬🇧'));
  };

  const handleFocus = () => {
    if (isOnHomeScreen) {
      navigation.navigate('SearchScreen');
    }
  };

  const handleLogo = () => {
    navigation.navigate('MainTab');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    const trimmed = searchText.trim();
    if (!trimmed) return;
    addHistory(trimmed);
    navigation.navigate('SearchResultScreen', { query: trimmed });
  };

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={15} color="#B33E3E" />
          <Text style={styles.locationText}>Bar Mai</Text>
        </View>

        <TouchableOpacity onPress={handleLogo}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/KU-Eater/KUEater-Frontend/refs/heads/base-gui/app/assets/logo_home.png',
          }}
          style={styles.logo}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLanguageToggle} style={styles.languageSwitch} disabled>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      {isOnHomeScreen ? (
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
        <View style={styles.activeSearchContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.arrowContainer}>
            <Ionicons name="arrow-back-outline" size={20} color="#999" />
          </TouchableOpacity>

          <TextInput
            style={styles.activeSearchInput}
            placeholder="Try searching for menu or food stall"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />

          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearIcon}>
              <Ionicons name="close" size={18} color="#888" />
            </TouchableOpacity>
          )}

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
  container: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 40,
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
    marginRight: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    alignSelf: "center"
  },
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
  clearIcon: {
    marginHorizontal: 10,
  },
  searchIconCircle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#006664',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

