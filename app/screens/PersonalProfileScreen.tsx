
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App"
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type PersonalProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "PersonalProfile">;

const ProsonalProfileScreen = () => {

    const navigation = useNavigation<PersonalProfileScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Screen</Text>
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

export default ProsonalProfileScreen;
