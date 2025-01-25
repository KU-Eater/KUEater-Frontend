import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('ENG 🇬🇧');

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === 'ENG 🇬🇧' ? 'THA 🇹🇭' : 'ENG 🇬🇧'));
  };

  return (
    <View style={styles.container}>
      {/* Top Row - Location, Logo, Language */}
      <View style={styles.topRow}>
        {/* Location (Left-aligned) */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={15} color="#B33E3E" />
          <Text style={styles.locationText}>Bar Mai</Text>
        </View>

        {/* Centered Logo */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/KU-Eater/KUEater-Frontend/refs/heads/base-gui/app/assets/logo_home.png' }}
          style={styles.logo}
        />

        {/* Language Switch (Right-aligned) */}
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
    alignItems: 'flex-start', // Align children to top
    justifyContent: 'center',
    position: 'relative',
    marginTop: 30
  },
  locationContainer: {
    position: 'absolute',
    left: 0,
    top: 0, // Align to top
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
    top: 0, // Align to top
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
  searchContainer: {
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
});

export default SearchBar;