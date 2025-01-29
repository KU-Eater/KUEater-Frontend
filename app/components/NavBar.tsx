import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen'; // Adjust path as needed
import ReviewScreen from '../screens/ReviewScreen'; // Adjust path as needed
import AccountScreen from '../screens/AccountScreen'; // Adjust path as needed
import { View, StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

interface IconProps {
  focused: boolean;
  size: number;
  color: string
}

// Custom Bookmark-Heart Icon
const BookmarkHeartIcon: React.FC<IconProps>= ({ focused, size, color}) => {
  return (
    <View>
      {/* Bookmark icon */}
      <Ionicons
        name={focused ? 'bookmarks' : 'bookmarks-outline'}
        size={size}
        color={color}
      />
      {/* Heart icon (overlayed) */}
      <Ionicons
        name='heart'
        size={size / 2.35}
        color={focused ? '#006664' : '#A9D3C5'}
        style={[
          styles.heartOverlay,
          { top: size * 0.25, left: size * 0.2 },
        ]}
      />
    </View>
  );
};

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the top header
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Saved') {
            return <BookmarkHeartIcon focused={focused} size={size} color={color} />;
          } else if (route.name === 'Review') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }
 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A9D3C5',
        tabBarStyle: {
          backgroundColor: '#00695C',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Review" component={ReviewScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  heartOverlay: {
    position: 'absolute',
  },
});