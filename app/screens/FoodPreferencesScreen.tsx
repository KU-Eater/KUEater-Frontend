import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Context
import { useUserPreferences } from "../context/UserPreferencesContext";
import { RootStackParamList } from "../App";

// Data Arrays (imported from separate file)
import {
    dietaryOptions,
    allergiesOptions,
    cuisinesOptions,
    dislikesOptions,
    dishesOptions
} from "../api/preferencesData";

// Chips Component
import Chips from "../components/Chips";
import { writeToPreferences } from "../api/services/mainService";

type FoodPreferencesScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "FoodPreferences"
>;

const FoodPreferencesScreen: React.FC = () => {
    const navigation = useNavigation<FoodPreferencesScreenNavigationProp>();
    const { preferences, updatePreferences } = useUserPreferences();

    // Local states for each preference category
    const [dietaryPref, setDietaryPref] = useState<string[]>(preferences.dietaryPreferences || []);
    const [allergies, setAllergies] = useState<string[]>(preferences.allergies || []);
    const [favoriteCuisines, setFavoriteCuisines] = useState<string[]>(preferences.favoriteCuisines || []);
    const [dislikedIngredients, setDislikedIngredients] = useState<string[]>(preferences.dislikedIngredients || []);
    const [favoriteDishes, setFavoriteDishes] = useState<string[]>(preferences.favoriteDishes || []);

    // State to track if everything is currently saved
    const [isSaved, setIsSaved] = useState(true);
    const isFavoriteDishValid = favoriteDishes.length >= 5;
    // Compare local states to context to enable or disable the "Save" button
    useEffect(() => {
        const changed =
            dietaryPref.join() !== preferences.dietaryPreferences.join() ||
            allergies.join() !== preferences.allergies.join() ||
            favoriteCuisines.join() !== preferences.favoriteCuisines.join() ||
            dislikedIngredients.join() !== preferences.dislikedIngredients.join() ||
            favoriteDishes.join() !== preferences.favoriteDishes.join();

        setIsSaved(!changed);
    }, [dietaryPref, allergies, favoriteCuisines, dislikedIngredients, favoriteDishes]);

    // Handler to update context
    const handleSave = () => {
        updatePreferences("dietaryPreferences", dietaryPref);
        updatePreferences("allergies", allergies);
        updatePreferences("favoriteCuisines", favoriteCuisines);
        updatePreferences("dislikedIngredients", dislikedIngredients);
        updatePreferences("favoriteDishes", favoriteDishes);
        writeToPreferences(
            {
                ...preferences,
                dietaryPreferences: dietaryPref,
                allergies: allergies,
                favoriteCuisines: favoriteCuisines,
                dislikedIngredients: dislikedIngredients,
                favoriteDishes: favoriteDishes,
            }
        )
        setIsSaved(true);
    };

    const saveLabel = isSaved ? "Saved" : "Save";

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
                    <Ionicons name="arrow-back" size={24} color="#006664" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Food Preferences</Text>

                <TouchableOpacity
                    onPress={handleSave}
                    disabled={isSaved || !isFavoriteDishValid}
                    style={styles.headerRight}
                >
                    <Ionicons
                        name="checkmark-outline"
                        size={17}
                        style={{ marginRight: 5 }}
                        color={(isSaved || !isFavoriteDishValid)? "#aaa" : "#006664"}
                    />
                    <Text style={[styles.saveButton, (!isSaved && isFavoriteDishValid) && { color: "#006664" }]}>
                        {saveLabel}
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {/* =========== Dietary Restrictions =========== */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="medkit" size={24} color="#006664"
                        style={{ marginRight: 12, marginBottom: -12 }} />
                    <Text style={styles.sectionTitle}>Dietary Restrictions</Text>
                </View>
                <Text style={styles.subTitle}>Do you have Dietary Laws or Preferences?</Text>
                <Chips
                    options={dietaryOptions}
                    selectedValues={dietaryPref}
                    onSelect={(selected) => setDietaryPref(selected)}
                />


                <Text style={styles.subTitle}>Do you have food Allergies or Intolerances?</Text>
                <Chips
                    options={allergiesOptions}
                    selectedValues={allergies}
                    onSelect={(selected) => setAllergies(selected)}
                />

                {/* =========== Meal Preferences =========== */}
                <View style={styles.divider} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="fast-food" size={24} color="#006664"
                        style={{ marginRight: 12, marginBottom: -12 }} />
                    <Text style={styles.sectionTitle}>Meal Preferencess</Text>
                </View>
                <Text style={styles.subTitle}>What is your favorite cuisines?</Text>
                <Chips
                    options={cuisinesOptions}
                    selectedValues={favoriteCuisines}
                    onSelect={(selected) => setFavoriteCuisines(selected)}
                />


                <Text style={styles.subTitle}>Do you have any disliked food or ingredients?</Text>
                <Chips
                    options={dislikesOptions}
                    selectedValues={dislikedIngredients}
                    onSelect={(selected) => setDislikedIngredients(selected)}
                />


                {/* =========== Favorite Dishes =========== */}
                <View style={styles.divider} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="heart" size={24} color="#006664"
                        style={{ marginRight: 12, marginBottom: -12 }} />
                    <Text style={styles.sectionTitle}>Favorite Dishes</Text>
                </View>

                <Text style={styles.subTitle}>What are your favorite dishes?</Text>
                <Chips
                    options={dishesOptions}
                    selectedValues={favoriteDishes}
                    onSelect={(selected) => setFavoriteDishes(selected)}
                />

                {/* Bottom spacing */}
                <View style={{ height: 60 }} />
            </ScrollView>
        </View>
    );
};

export default FoodPreferencesScreen;

/* =================================
       STYLES
================================= */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 55,
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: "#fff",
        elevation: 2
    },
    headerLeft: {
        width: 50
    },
    headerTitle: {
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    headerRight: {
        width: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    saveButton: {
        fontSize: 15,
        color: "#aaa",
        fontWeight: "bold"
    },
    scrollContainer: {
        paddingHorizontal: 36,
        paddingTop: 10
    },
    sectionTitle: {
        fontSize: 34,
        color: "#006664",
        marginTop: 15,
        fontFamily: "FC-Lamoon"
    },
    subTitle: {
        fontSize: 16,
        color: "#3A3838",
        marginTop: 25,
        fontWeight: "bold"
    },

    divider: {
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
        marginVertical: 20,
        marginTop: 30,
        width: "108%",
        alignSelf: "center",
    },




});
