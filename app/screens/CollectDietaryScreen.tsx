import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Ionicons } from "@expo/vector-icons";
import GradientProgressBar from "../components/GradientProgressBar";
import GradientButton from "../components/GradientButton";
import Chips from "../components/Chips"; // Import Chips Component

type CollectDietaryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "CollectDietary">;

const CollectDietaryScreen = () => {
    const navigation = useNavigation<CollectDietaryScreenNavigationProp>();
    const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
    const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

    // Dietary Preferences Options
    const dietaryPreferences = [
        "Nothing", "Halal", "Vegetarian", "Vegan",
        "Pescatarian", "Pollotarian", "Ovo-Vegetarian",
        "Lacto-Vegetarian", "Low-Carb", "Keto"
    ];

    // Allergies & Intolerances Options
    const allergies = [
        "Nothing", "Lactose", "Eggs", "Dairy", "Shellfish", "Fishes", "Seafood",
        "Peanuts", "Gluten", "Sesame", "Nuts", "Soy", "Rice",
        "Red Meat", "Corn", "Wheat", "Fructose"
    ];

    // Function to navigate next
    const handleNext = () => {
        navigation.navigate("CollectMeal");
    };

    // Function to skip
    const handleSkip = () => {
        navigation.navigate("CollectMeal");
    };

    // Function to go back
    const handleBack = () => {
        navigation.navigate("CollectRole");
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <GradientProgressBar progress={0.60} />

            <View style={styles.secondContainer}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Ionicons name="arrow-back" size={28} color="#066644" />
                </TouchableOpacity>

                {/* Skip Button */}
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.title}>What about your Dietary Restrictions?</Text>
                <Text style={styles.infoText}>
                    You can change them later on Account.
                </Text>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Dietary Preferences Section */}
                    <Text style={styles.sectionTitle}>Do you have Dietary Preferences?</Text>
                    <Chips options={dietaryPreferences} selectedValues={selectedPreferences} onSelect={setSelectedPreferences} />

                    {/* Allergies & Intolerances Section */}
                    <Text style={styles.sectionTitle}>Do you have food Allergies or Intolerances?</Text>
                    <Chips options={allergies} selectedValues={selectedAllergies} onSelect={setSelectedAllergies} />
                </ScrollView>

                {/* Next Button */}
                <View style={styles.buttonWrapper}>
                    <GradientButton title="Next" onPress={handleNext} disabled={selectedPreferences.length === 0 && selectedAllergies.length === 0} />
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
        color: "#7A7A7A", // Gray color
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

export default CollectDietaryScreen;
