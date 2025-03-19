
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type FoodPreferencesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "FoodPreferences">;

const FoodPreferencesScreen = () => {

    const navigation = useNavigation<FoodPreferencesScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Food Preferences Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});

export default FoodPreferencesScreen;
