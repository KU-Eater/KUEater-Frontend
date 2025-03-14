import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";


type CollectRoleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CollectRole'>;
const CollectRoleScreen = () => {
  const navigation = useNavigation<CollectRoleScreenNavigationProp>();
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <ProgressBar progress={0.30} color="#006D5B" style={{ height: 6, marginBottom: 20 }} />
      <TouchableOpacity onPress={() => navigation.goBack()}><Text>← Back</Text></TouchableOpacity>
      <Text>Which one describes you the best?</Text>
      {["KU Student", "Exchange Student", "KU Professor", "KU Staff", "Guest"].map((role) => (
        <TouchableOpacity key={role} onPress={() => setSelectedRole(role)}>
          <Text style={{ fontWeight: selectedRole === role ? "bold" : "normal" }}>{role}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        disabled={!selectedRole}
        onPress={() => navigation.navigate("CollectDietary")}
      >
        <Text style={{ opacity: selectedRole ? 1 : 0.5 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollectRoleScreen;
