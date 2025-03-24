import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Import your new SearchBar (which includes top row + active search bar style)
import SearchBar from '../components/SearchBar';

type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  SearchResultScreen: { query: string };
};

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Mock search history and suggestions
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

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  // Navigate to SearchResultScreen with the tapped query
  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    navigation.navigate('SearchResultScreen', { query });
  };

  return (
    <View style={styles.container}>
      {/* Use the new SearchBar in active mode (no isOnHomeScreen prop) */}
      <SearchBar />

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
  contentContainer: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  // Search History
  historyContainer: {
    backgroundColor: '#FAF5F0',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
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
  // Suggestions
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
