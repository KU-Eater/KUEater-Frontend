import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us Screen</Text>
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

export default AboutUsScreen;
