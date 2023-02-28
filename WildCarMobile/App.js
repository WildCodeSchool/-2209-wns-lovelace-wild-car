import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Trips from './screens/Trips';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Mes trajets') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Paramètres') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#952604',
          tabBarStyle: {
            backgroundColor: '#f4511e',
          },
        })}
      >
        <Tab.Screen
          name="Accueil"
          component={Home}
          options={{
            unmountOnBlur: true,
            headerStyle: {
              height: 50,
              backgroundColor: '#f4511e',
            },
            headerTitle: () => null,
          }}
        />

        <Tab.Screen
          name="Mes trajets"
          component={Trips}
          options={{
            unmountOnBlur: true,
            headerStyle: {
              height: 50,
              backgroundColor: '#f4511e',
            },
            headerTitle: () => null,
          }}
        />

        <Tab.Screen
          name="Paramètres"
          component={Settings}
          options={{
            unmountOnBlur: true,
            headerStyle: {
              height: 50,
              backgroundColor: '#f4511e',
            },
            headerTitle: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});
