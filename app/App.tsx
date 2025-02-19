// App.tsx
import React from 'react';
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

const Stack = createNativeStackNavigator();

export const APIContext = React.createContext("http://10.0.2.2:50051");

export default function App() {

  const [apiHost, setApiHost] = React.useState("http://10.0.2.2:50051");

  return (
    <APIContext.Provider value={apiHost}>
    <NavigationContainer>
      <Stack.Navigator>
        {/* 1) หน้าแรกเป็น NavBar ซึ่งมี Bottom Tabs: Home, Saved, etc. */}
        <Stack.Screen
          name="MainTab"
          component={NavBar}
          options={{ headerShown: false }}
        />

        {/* 2) เพิ่ม SearchScreen */}
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ 
            headerShown: false,
            presentation: 'modal',
            animation: 'fade',
          }}
        />

        {/* 3) เพิ่ม SearchResultScreen */}
        <Stack.Screen
          name="SearchResultScreen"
          component={SearchResultScreen}
          options={{ headerShown: false }}
        />

        {/* 4) หน้าร้าน (Stall Profile) */}
        <Stack.Screen
          name="StallProfile"
          component={StallProfileScreen}
          options={{ headerShown: false }}
        />

        {/* 5) หน้าเมนู (Menu Details) */}
        <Stack.Screen
          name="MenuDetails"
          component={MenuDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </APIContext.Provider>
  );
}
