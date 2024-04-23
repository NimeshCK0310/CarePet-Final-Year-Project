
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreeen/HomeScreen'; 
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';


const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Define screens within Stack.Navigator */}
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessListByCategoryScreen} />
      <Stack.Screen name="Business-detail" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}