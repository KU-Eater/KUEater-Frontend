import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";


type CollectDishesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectDishes'>;
const CollectDishesScreen = () => {
  const navigation = useNavigation<CollectDishesScreenNavigationProp>();
  const [selectedDishes, setSelectedDishes] = useState([]);



  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={0.90} color="#006D5B" style={{ height: 6, marginBottom: 20 }} />
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>← Back</Text></TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainTab")}
      >
        <Text>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollectDishesScreen;
