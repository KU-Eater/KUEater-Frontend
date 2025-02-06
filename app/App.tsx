// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// นำเข้า NavBar (Bottom Tabs) ของเรา
import NavBar from './components/NavBar';

// นำเข้า StallProfileScreen (หน้ารายละเอียดร้านที่เราจะสร้าง)
import StallProfileScreen from './screens/StallProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 1) หน้าแรกเป็น NavBar ซึ่งมี Bottom Tabs: Home, Saved, etc. */}
        <Stack.Screen
          name="MainTab"
          component={NavBar}
          options={{ headerShown: false }}
        />

        {/* 2) หน้าร้าน (Stall Profile) */}
        <Stack.Screen
          name="StallProfile"
          component={StallProfileScreen}
          options={{ headerShown: false }} 
          // จะให้แสดง header ไหมก็ได้ ถ้าต้องการใส่ title ก็ปรับ headerShown: true
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
