import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('EN'); // Default to English

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'EN' ? 'TH' : 'EN'));
  };

  return (
    <View style={styles.container}>
      {/* Location and Logo Row */}
      <View style={styles.topRow}>
        {/* Location */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={15} color="#B33E3E" />
          <Text style={styles.locationText}>Bar Mai</Text>
        </View>

        {/* Logo */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/KU-Eater/KUEater-Frontend/refs/heads/base-gui/app/assets/logo_home.png' }}
          style={styles.logo}
        />

        {/* Language Switch */}
        <TouchableOpacity onPress={handleLanguageToggle} style={styles.languageSwitch}>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Try searching for menu or food stall"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
};

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
    alignItems: 'center',
    justifyContent: 'space-between',    
    
  },
  locationContainer: {
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
    width: 200,
    height: 100,
    // resizeMode: 'contain',
  },
  languageSwitch: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#006664',
  },
  languageText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#006664',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
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
});

export default SearchBar;
