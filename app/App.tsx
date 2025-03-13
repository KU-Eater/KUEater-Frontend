// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// นำเข้า Login & Signup Screens ใหม่
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// นำเข้า NavBar (Bottom Tabs) ของเรา
import NavBar from './components/NavBar';

// นำเข้า StallProfileScreen (หน้ารายละเอียดร้านที่เราจะสร้าง)
import StallProfileScreen from './screens/StallProfileScreen';
import MenuDetailScreen from './screens/MenuDetailScreen';

// เพิ่มการนำเข้า SearchScreen และ SearchResultScreen
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LoginGoogleScreen from './screens/LoginGoogleScreen';

// ประกาศ type สำหรับ Stack ถ้าต้องการใช้กับ TypeScript
// (ถ้าไม่ต้องการบังคับ type แน่น ก็สามารถใช้ any ได้)
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  LoginGoogle: undefined;
  MainTab: undefined;
  SearchScreen: undefined;
  SearchResultScreen: undefined;
  StallProfile: undefined;
  MenuDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginGoogle">
        
        {/* 1) หน้า Login with google */}
        <Stack.Screen
          name="LoginGoogle"
          component={LoginGoogleScreen}
          options={{ headerShown: false,
           }}
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
          options={{ 
            headerShown: false,
          }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
