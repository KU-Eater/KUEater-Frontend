import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Ionicons } from "@expo/vector-icons";
import GradientProgressBar from "../components/GradientProgressBar";
import GradientButton from "../components/GradientButton";
import { useUserPreferences } from "../context/UserPreferencesContext";



type CollectRoleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "CollectRole">;

const CollectRoleScreen = () => {
    const navigation = useNavigation<CollectRoleScreenNavigationProp>();
    const { preferences, updatePreferences } = useUserPreferences();

    const [selectedRole, setSelectedRole] = useState(preferences.role); // Load stored value

    useEffect(() => {
        setSelectedRole(preferences.role); // Ensure stored value loads when re-entering screen
    }, [preferences.role]);


    // Role options
    const roles = ["KU Student", "Exchange Student", "KU Professor", "KU Staff", "Guest"];

    // Function to handle "Next" navigation
    const handleNext = () => {
        // if (selectedRole) {
        updatePreferences("role", selectedRole);
        navigation.navigate("CollectDietary");
        // }
    };

    // Function to handle "Skip" navigation
    const handleSkip = () => {
        navigation.navigate("CollectDietary");
    };

    // Function to handle "Back" navigation
    const handleBack = () => {
        navigation.navigate("CollectUsername");
    };

    const handleRoleSelection = (role: string) => {
        setSelectedRole(prev => (prev === role ? null : role));
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <GradientProgressBar progress={0.30} />

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
                <Text style={styles.title}>Which one describes you the best?</Text>

                {/* Role Selection */}
                {roles.map((role) => (
                    <TouchableOpacity
                        key={role}
                        style={[styles.roleButton, selectedRole === role ? styles.roleButtonSelected : {}]}
                        onPress={() => handleRoleSelection(role)}
                    >
                        <Text style={[styles.roleText, selectedRole === role ? styles.roleTextSelected : {}]}>
                            {role}
                        </Text>
                    </TouchableOpacity>
                ))}


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
        fontSize: 41,
        color: "#064A4F",
        fontFamily: "FC-Lamoon",
        marginTop: 60,
        marginBottom: 30,
        lineHeight: 48,
    },
    roleButton: {
        marginTop: 30,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#D0CECE",
        borderRadius: 35,
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        width: "95%",
        alignSelf: "center",
    },
    roleButtonSelected: {
        borderColor: "#066644",
        borderWidth: 2,
    },
    roleText: {
        fontSize: 18,
        color: "#3A3838",
        fontWeight: "bold",
    },
    roleTextSelected: {
        fontWeight: "bold",
        color: "#066644",
    },
    buttonWrapper: {
        marginTop: "auto",
        paddingVertical: 20,
    },
});

export default CollectRoleScreen;
