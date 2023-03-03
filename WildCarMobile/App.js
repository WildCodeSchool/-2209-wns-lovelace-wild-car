import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeRecherche from './screens/HomeRecherche';
import HomeProposer from './screens/HomeProposer';
import Settings from './screens/Settings';
import Trips from './screens/Trips';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const StackNavigatorHomeScreen = createStackNavigator();

function getHeaderBackgroundColor(routeName) {
  if (routeName === 'homeRecherche') {
    return '#f4511e';
  } else {
    return '#24539D';
  }
}

function StackNavigatorHome({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: getHeaderBackgroundColor(route.name),
        height: 50,
      },
      headerTitle: () => null,
    });
  }, [navigation, route]);

  return (
    <StackNavigatorHomeScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigatorHomeScreen.Screen
        name="homeRecherche"
        component={HomeRecherche}
      />
      <StackNavigatorHomeScreen.Screen
        name="homeProposer"
        component={HomeProposer}
      />
    </StackNavigatorHomeScreen.Navigator>
  );
}

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

          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#535353',
          tabBarStyle: {
            backgroundColor: 'white',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Accueil" component={StackNavigatorHome} />

        <Tab.Screen
          name="Mes trajets"
          component={Trips}
          options={{
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
