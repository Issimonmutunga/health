import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Locations from '../screens/Locations';

const Tab = createBottomTabNavigator();

// Define icon sources outside the component
const icons: Record<string, any> = {
  Home: require('../assets/icons/home.jpeg'),
  Locations: require('../assets/icons/location.jpeg'),
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#4B8DF8',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarIcon: ({ size }) => {
        const iconSource = icons[route.name];
        return <Image source={iconSource} style={{ width: size, height: size }} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Locations" component={Locations} />
  </Tab.Navigator>
);

export default TabNavigator;
