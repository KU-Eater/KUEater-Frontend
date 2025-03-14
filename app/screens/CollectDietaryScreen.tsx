import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";


type CollectDietaryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectDietary'>;
const CollectDietaryScreen = () => {
  const navigation = useNavigation<CollectDietaryScreenNavigationProp>();
  const [preferences, setPreferences] = useState([]);



  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={0.60} color="#006D5B" style={{ height: 6, marginBottom: 20 }} />
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>← Back</Text></TouchableOpacity>
      <Text>What about your Dietary Restrictions?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CollectMeal")}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollectDietaryScreen;
