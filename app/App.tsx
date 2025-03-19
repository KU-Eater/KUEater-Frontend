// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// นำเข้า NavBar (Bottom Tabs) ของเรา
import NavBar from './components/NavBar';

// นำเข้า StallProfileScreen (หน้ารายละเอียดร้านที่เราจะสร้าง)
import StallProfileScreen from './screens/StallProfileScreen';
import MenuDetailScreen from './screens/MenuDetailScreen';

// เพิ่มการนำเข้า SearchScreen และ SearchResultScreen
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LoginGoogleScreen from './screens/LoginGoogleScreen';

// Import Landing Session Screens
import CollectUsernameScreen from './screens/CollectUsernameScreen';
import CollectRoleScreen from './screens/CollectRoleScreen';
import CollectDietaryScreen from './screens/CollectDietaryScreen';
import CollectMealScreen from './screens/CollectMealScreen';
import CollectDishesScreen from './screens/CollectDishesScreen';
import PersonalProfileScreen from './screens/PersonalProfileScreen';
import FoodPreferencesScreen from './screens/FoodPreferencesScreen';

import { UserPreferencesProvider } from './context/UserPreferencesContext';

import AccountScreen from './screens/AccountScreen';

import * as Font from "expo-font";
import { ActivityIndicator, View } from "react-native";

// ประกาศ type สำหรับ Stack ถ้าต้องการใช้กับ TypeScript
// (ถ้าไม่ต้องการบังคับ type แน่น ก็สามารถใช้ any ได้)
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  LoginGoogle: undefined;
  MainTab: undefined;
  Account: undefined;
  SearchScreen: undefined;
  SearchResultScreen: undefined;
  StallProfile: undefined;
  MenuDetails: undefined;
  CollectUsername: undefined;
  CollectRole: undefined;
  CollectDietary: undefined;
  CollectMeal: undefined;
  CollectDishes: undefined;
  PersonalProfile: undefined;
  FoodPreferences: undefined;

};


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await Font.loadAsync({
          "FC-Lamoon": require("./assets/fonts/FCLamoonBold.otf"),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading font:", error);
      }
    }
    loadResources();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#006664" />
      </View>
    );
  }

  return (
    <UserPreferencesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginGoogle">

          {/* 1) หน้า Login with google */}
          <Stack.Screen
            name="LoginGoogle"
            component={LoginGoogleScreen}
            options={{ headerShown: false }}
          />

          {/* 2) หน้าแรกเป็น NavBar ซึ่งมี Bottom Tabs: Home, Saved, etc. */}
          <Stack.Screen
            name="MainTab"
            component={NavBar}
            options={{ headerShown: false }}
          />

          {/* 3) เพิ่ม SearchScreen */}
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />

          {/* 4) เพิ่ม SearchResultScreen */}
          <Stack.Screen
            name="SearchResultScreen"
            component={SearchResultScreen}
            options={{ headerShown: false }}
          />

          {/* 5) หน้าร้าน (Stall Profile) */}
          <Stack.Screen
            name="StallProfile"
            component={StallProfileScreen}
            options={{ headerShown: false }}
          />

          {/* 6) หน้าเมนู (Menu Details) */}
          <Stack.Screen
            name="MenuDetails"
            component={MenuDetailScreen}
            options={{ headerShown: false }}
          />

          {/* 7) Landing Session Screens */}
          <Stack.Screen
            name="CollectUsername"
            component={CollectUsernameScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />
          <Stack.Screen
            name="CollectRole"
            component={CollectRoleScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />
          <Stack.Screen
            name="CollectDietary"
            component={CollectDietaryScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />
          <Stack.Screen
            name="CollectMeal"
            component={CollectMealScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />
          <Stack.Screen
            name="CollectDishes"
            component={CollectDishesScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />


          {/* 8) Account Session Screens */}
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen
            name="PersonalProfile"
            component={PersonalProfileScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />
          <Stack.Screen
            name="FoodPreferences"
            component={FoodPreferencesScreen}
            options={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }} />



        </Stack.Navigator>
      </NavigationContainer>
    </UserPreferencesProvider>
  );
}
