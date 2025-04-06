import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import SearchBar from '../components/SearchBar';
import { useSearch } from '../context/SearchContext';

type RootStackParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  SearchResultScreen: { query: string };
};

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { history, addHistory, clearHistory } = useSearch();

  const searchSuggestions = [
    'Healthy',
    'Fish',
    'Grilled Fish',
    'Saba Teriyaki',
    'Clean Food',
    'Fish Steak',
  ];

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    addHistory(query);
    navigation.navigate('SearchResultScreen', { query });
  };

  return (
    <View style={styles.container}>
      <SearchBar />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Search History */}
        {history.length > 0 && (
          <View style={styles.historyContainer}>
            {history.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSearch(item)}
                style={styles.historyItem}
              >
                <View style={styles.historyRow}>
                  <MaterialIcons name="history" size={20} color="#555" />
                  <Text style={styles.historyText}>{item}</Text>
                </View>
                {index < history.length - 1 && <View style={styles.divider} />}
              </TouchableOpacity>
            ))}

            <TouchableOpacity onPress={clearHistory} style={styles.clearButton}>
              <Text style={styles.clearHistoryText}>Clear Search History</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Search Suggestions */}
        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Search Suggestions</Text>
          <View style={styles.chipContainer}>
            {searchSuggestions.map((text, index) => (
              <TouchableOpacity
                key={index}
                style={styles.chip}
                onPress={() => handleSearch(text)}
              >
                <Text style={styles.chipText}>{text}</Text>
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
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },

  // History
  historyContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 24,
  },
  historyItem: {
    paddingVertical: 10,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 12,
  },
  clearButton: {
    alignItems: 'center',
    marginTop: 16,
  },
  clearHistoryText: {
    fontSize: 13,
    color: '#B33E3E',
    textDecorationLine: 'underline',
  },

  // Suggestions
  suggestionsContainer: {
    marginBottom: 24,
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006664',
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginBottom: 8,
  },
  chipText: {
    color: '#006664',
    fontSize: 14,
  },
});
