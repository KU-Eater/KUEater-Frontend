import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Define type for props
interface GradientProgressBarProps {
  progress: number; // Ensure progress is a number (0 to 1)
}

const GradientProgressBar: React.FC<GradientProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      {/* Background Bar */}
      <View style={styles.progressBarBackground} />
      {/* Foreground Gradient Bar */}
      <LinearGradient
        colors={["#004d40", "#00796b", "#26a69a"]} // Adjust colors to match your gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.progressBar, { width: `${progress * 100}%` }]} // Dynamic width
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 8, // Match the height in your image
    width: "100%",
    backgroundColor: "rgba(1, 0, 0, 0.2)", // Light background
    overflow: "hidden",
    marginTop:36,
  },
  progressBarBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Slight background for visibility
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
    position: "absolute",
  },
});

export default GradientProgressBar;
