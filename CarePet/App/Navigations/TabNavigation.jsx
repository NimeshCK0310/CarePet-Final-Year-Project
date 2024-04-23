import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
            <Tab.Navigator
            screenOptions={{headerShown:false}}>

              {/* HomeScreen */}
              <Tab.Screen name="home" component={HomeNavigation}
              options={{
                tabBarLabel: ({ color }) => (
                  <Text style={{ color: color, fontSize: 12, marginTop: -2}}>
                    Home
                  </Text>
                ),
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" size={size} color={color} />
                ),
              }}
              />

              {/* BookingScreen */}
              <Tab.Screen name="Booking" component={BookingScreen}
                options={{
          tabBarLabel: ({ color }) => ( 
            <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
              />

              {/* ProfileScreen */}
              <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
        
              />
          
            </Tab.Navigator>
  )
}
