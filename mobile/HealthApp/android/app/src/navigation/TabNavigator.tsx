import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Locations from '../screens/Locations';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

// Define icon sources outside the component
const icons: Record<string, any> = {
  Home: require('../assets/icons/home.jpeg'),
  Locations: require('../assets/icons/location.jpeg'),
  Profile: require('../assets/icons/profile.jpeg'),
};

// Define the icon rendering function outside the component
const renderTabIcon = (routeName: string, size: number) => {
  const iconSource = icons[routeName];
  return <Image source={iconSource} style={{ width: size, height: size }} />;
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#4B8DF8',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarIcon: ({ size }) => renderTabIcon(route.name, size),
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Locations" component={Locations} />
    <Tab.Screen name="Profile" component={LoginScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
