import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Ionicons } from '@expo/vector-icons';
import GradientProgressBar from "../components/GradientProgressBar";
import GradientButton from "../components/GradientButton";

type CollectUsernameScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "CollectUsername">;

const CollectUsernameScreen = () => {
    const navigation = useNavigation<CollectUsernameScreenNavigationProp>();
    const [username, setUsername] = useState("");

    // Function to handle "Next" navigation
    const handleNext = () => {
        if (username.trim()) {
            navigation.navigate("CollectRole");
        }
    };

    // Function to handle "Back" navigation
    const handleBack = () => {
            navigation.navigate("LoginGoogle");
    };

    return (
        <View style={styles.container}>
            {/* Progress Bar */}
            <GradientProgressBar progress={0.15} />



            <View style={styles.secondContainer}>

                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={handleBack} >
                    <Ionicons name="arrow-back" size={28} color="#066644" />
                </TouchableOpacity>


                {/* Title */}
                <Text style={styles.title}>What'll be your Username?</Text>

                {/* Input Field */}
                <TextInput
                    placeholder="Type any username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    placeholderTextColor="#B0B0B0"
                />

                {/* Helper Text */}
                <Text style={styles.helperText}>
                    This is how it’ll appear on your profile{"\n"}
                    <Text style={{ fontWeight: "bold" }}>You can change it later.</Text>
                </Text>

                {/* Next Button */}
                <View style={styles.buttonWrapper}>
                    <GradientButton title="Next" onPress={handleNext} disabled={!username.trim()} />
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
        position: 'absolute',
        top: 10,
        left: 16,
        borderRadius: 20,
        padding: 6,
    },
    backArrow: {
        fontSize: 24,
        color: "#006D5B",
    },
    title: {
        fontSize: 45,
        color: "#064A4F",
        marginBottom: 20,
        fontFamily: "FC-Lamoon",
        marginTop: 60,
        lineHeight: 51,
    },
    input: {
        borderBottomWidth: 0.6,
        borderBottomColor: "#B0B0B0",
        fontSize: 18,
        paddingTop: 5,
        marginBottom: 15,
        color: "#3A3838",
        alignItems: "center",
        alignSelf: "center",
        width: "95%",
        
    },
    helperText: {
        fontSize: 14,
        color: "#666",
        marginBottom: 40,
        alignItems: "center",
        alignSelf: "center",
        width: "95%",
    },
    buttonWrapper: {
        marginTop: "auto",
        paddingVertical: 20,
    },
});

export default CollectUsernameScreen;
