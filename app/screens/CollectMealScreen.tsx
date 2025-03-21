import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Ionicons } from "@expo/vector-icons";
import GradientProgressBar from "../components/GradientProgressBar";
import GradientButton from "../components/GradientButton";
import Chips from "../components/Chips"; // Reusing Chips Component
import { useUserPreferences } from "../context/UserPreferencesContext";
import { cuisinesOptions,dislikesOptions } from "../api/PreferencesData";

type CollectMealScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "CollectMeal">;

const CollectMealScreen = () => {
    const navigation = useNavigation<CollectMealScreenNavigationProp>();
    const { preferences, updatePreferences } = useUserPreferences();
    const [selectedCuisines, setSelectedCuisines] = useState(preferences.favoriteCuisines);
    const [selectedDislikes, setSelectedDislikes] = useState(preferences.dislikedIngredients);

    // Favorite Cuisines Options
    const cuisines = cuisinesOptions

    // Disliked Ingredients Options
    const dislikes = dislikesOptions

    // Function to navigate next
    const handleNext = () => {
        // if (selectedCuisines.length > 0 || selectedDislikes.length > 0) {
            updatePreferences("favoriteCuisines", selectedCuisines); // Store favorite cuisines
            updatePreferences("dislikedIngredients", selectedDislikes); // Store disliked ingredients
            navigation.navigate("CollectDishes");
        // }
    };

    // Function to skip
    const handleSkip = () => {
        navigation.navigate("CollectDishes");
    };

    // Function to go back
    const handleBack = () => {
        navigation.navigate("CollectDietary");
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <GradientProgressBar progress={0.80} />

            <View style={styles.secondContainer}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Ionicons name="arrow-back" size={28} color="#066644" />
                </TouchableOpacity>

                {/* Skip Button */}
                <TouchableOpacity style={styles.skipButton} onPress={handleNext}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>Let's talk about your Meal Preferences.</Text>
                <Text style={styles.infoText}>You can change them later on Account.</Text>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Favorite Cuisines Section */}
                    <Text style={styles.sectionTitle}>What is your favorite cuisines?</Text>
                    <Chips options={cuisines} selectedValues={selectedCuisines} onSelect={setSelectedCuisines} />

                    {/* Disliked Ingredients Section */}
                    <Text style={styles.sectionTitle}>Do you have any disliked food or ingredients?</Text>
                    <Chips options={dislikes} selectedValues={selectedDislikes} onSelect={setSelectedDislikes} />
                </ScrollView>

                {/* Next Button */}
                <View style={styles.buttonWrapper}>
                    <GradientButton title="Next" onPress={handleNext} />
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
    skipButton: {
        position: "absolute",
        top: 10,
        right: 16,
    },
    skipText: {
        fontSize: 16,
        color: "#066644",
        fontWeight: "bold",
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
        marginTop: 15,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3A3838",
        marginTop: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    buttonWrapper: {
        marginTop: "auto",
        paddingVertical: 20,
    },
});

export default CollectMealScreen;
