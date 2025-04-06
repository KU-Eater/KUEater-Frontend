import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Category {
  id: number;
  name: string;
  icon: string; // URL to the category icon
}

const categories: Category[] = [
  { id: 1, name: 'Noodle', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666714.png' },
  { id: 2, name: 'Fast food', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666638.png' },
  { id: 3, name: 'Order to cook', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666830.png' },
  { id: 4, name: 'Beverages', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666824.png' },
  { id: 5, name: 'Dessert', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666658.png' },
  { id: 6, name: 'Ice Cream', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666784.png' },
  { id: 7, name: 'Coffee/Tea', icon: 'https://cdn-icons-png.freepik.com/256/8666/8666632.png' },
  { id: 8, name: 'Fruit', icon: 'https://cdn-icons-png.flaticon.com/128/6973/6973944.png' },
];

interface CategoryBarProps {
  onCategorySelect?: (categoryName: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ onCategorySelect }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => onCategorySelect?.(category.name)} // 🔥
          >
            <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop:16,
    marginBottom: 10
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555555',
  },
});

export default CategoryBar;
