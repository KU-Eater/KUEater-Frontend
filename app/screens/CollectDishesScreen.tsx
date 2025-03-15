import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Ionicons } from "@expo/vector-icons";
import GradientProgressBar from "../components/GradientProgressBar";
import GradientButton from "../components/GradientButton";
import Chips from "../components/Chips"; // Reusing Chips Component

type CollectDishesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "CollectDishes">;

const CollectDishesScreen = () => {
  const navigation = useNavigation<CollectDishesScreenNavigationProp>();
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  // Dishes options
  const dishes = [
    "Thai Food", "Egg", "Crispy Pork", "Fried Rice Chicken",
    "Iced Thai Tea", "Pad Thai", "Vietnamese Noodle (Pho)", 
    "Thai Coconut Curry Noodle (Khao Soi)", "Noodles", "Crab", "Spicy Salad", "Sushi",
    "Hamburger", "Coffee", "Som Tam (Green Papaya Salad)", "Kimchi soup (Kimchi Jjigae)",
    "Japanese foods", "Chicken", "Shrimp", "Smoothies", "Mango Sticky Rice", "Fish",
    "Kimchi Jjigae (Kimchi Soup)", "Japanese Curry Rice", "Stir-Fried Thai Basil (Pad Kra Pao)",
    "Thai Green Curry Chicken", "Stir-Fried Noodle (Pad See Ew)", "Spaghetti",
    "Thai Chicken Rice", "Curry Rice", "Pork"
  ];

  // Function to navigate next
  const handleNext = () => {
    if (selectedDishes.length > 10) {
      navigation.navigate("MainTab");
    }
  };

  // Function to go back
  const handleBack = () => {
    navigation.navigate("CollectMeal");
  };

  // Function to limit selection to 10 dishes
  const handleSelectDishes = (selected: string[]) => {
    if (selected.length <= 50) {
        setSelectedDishes(selected);
      }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <GradientProgressBar progress={0.98} />

      <View style={styles.secondContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#066644" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Select your favorite Dishes! ❤︎</Text>
        <Text style={styles.infoText}>You can change them later on Setting.</Text>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Favorite Dishes Section */}
          <Chips options={dishes} selectedValues={selectedDishes} onSelect={handleSelectDishes} />
        </ScrollView>

        {/* Next Button with dynamic counter */}
        <View style={styles.buttonWrapper}>
          <GradientButton title={`Next (${selectedDishes.length}/10)`} onPress={handleNext} disabled={selectedDishes.length < 10} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  secondContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 16,
    borderRadius: 20,
    padding: 6,
  },
  title: {
    fontSize: 40,
    color: "#064A4F",
    fontFamily: "FC-Lamoon",
    marginTop: 60,
    lineHeight: 48,
  },
  infoText: {
    fontSize: 14,
    color: "#7A7A7A",
    textAlign: "left",
    marginTop: 10,
    marginBottom: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  buttonWrapper: {
    marginTop: "auto",
    paddingVertical: 20,
  },
});

export default CollectDishesScreen;
