import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type CollectMealScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectMeal'>;
const CollectMealScreen = () => {
  const navigation = useNavigation<CollectMealScreenNavigationProp>();
  const [favoriteCuisines, setFavoriteCuisines] = useState([]);


  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={0.80} color="#006D5B" style={{ height: 6, marginBottom: 20 }} />
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>← Back</Text></TouchableOpacity>
      <Text>Let’s talk about your Meal Preferences.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CollectDishes")}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollectMealScreen;
