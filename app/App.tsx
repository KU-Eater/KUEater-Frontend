import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar'; // Ensure NavBar is correctly imported
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen/>
  );
}
