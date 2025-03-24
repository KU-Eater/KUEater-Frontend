import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ChipsProps {
  options: string[];
  selectedValues: string[];
  onSelect: (selected: string[]) => void;
}

const Chips: React.FC<ChipsProps> = ({ options, selectedValues, onSelect }) => {
  const handleSelect = (item: string) => {
    const updatedSelection = selectedValues.includes(item)
      ? selectedValues.filter((value) => value !== item) // Remove if already selected
      : [...selectedValues, item]; // Add if not selected

    onSelect(updatedSelection); // Send updated selection back
  };

  return (
    <View style={styles.container}>
      {options.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.chip, selectedValues.includes(item) ? styles.chipSelected : {}]}
          onPress={() => handleSelect(item)}
        >
          <Text style={[styles.chipText, selectedValues.includes(item) ? styles.chipTextSelected : {}]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  chip: {
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#D0CECE",
    borderRadius: 25,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginRight: 8,
    marginBottom: 10,
  },
  chipSelected: {
    borderColor: "#066644",
    borderWidth: 1.2,
  },
  chipText: {
    fontSize: 14,
    color: "#3A3838",
  },
  chipTextSelected: {
    fontWeight: "bold",
    color: "#066644",
  },
});

export default Chips;
