import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

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

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <ProgressBar progress={0.15} color="#006D5B" style={styles.progressBar} />

      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
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
      <TouchableOpacity
        style={[styles.nextButton, username.trim() ? styles.nextButtonActive : styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!username.trim()}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  progressBar: {
    height: 6,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
  backArrow: {
    fontSize: 24,
    color: "#006D5B",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#064A4F",
    marginBottom: 20,
    fontFamily: "FC-Lamoon"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#B0B0B0",
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 10,
    color: "#000",
  },
  helperText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 40,
  },
  nextButton: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonActive: {
    backgroundColor: "#006D5B",
  },
  nextButtonDisabled: {
    backgroundColor: "#B0B0B0",
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CollectUsernameScreen;
