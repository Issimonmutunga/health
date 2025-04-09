import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './android/app/src/screens/LoginScreen';
import SignupScreen from './android/app/src/screens/SignupScreen';
import TabNavigator from './android/app/src/navigation/TabNavigator';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TabNavigator becomes the main route */}
        <Stack.Screen name="Main" component={TabNavigator} />
        {/* Other screens can still be accessed from anywhere */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
