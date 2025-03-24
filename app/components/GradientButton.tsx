import React from "react";
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onPress}
      activeOpacity={disabled ? 1 : 0.8}
      style={[styles.buttonContainer, disabled && styles.buttonDisabled]}
      disabled={disabled}
    >
      <LinearGradient
        colors={disabled ? ["#B0B0B0", "#B0B0B0"] : ["#004d40", "#00796b", "#26a69a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 18,
    overflow: "hidden",

    

  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 1, // Makes it look inactive
  },
  buttonTextDisabled: {
    color: "#fff",
  },
});

export default GradientButton;
