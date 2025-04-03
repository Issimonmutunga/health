import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator, 
  DrawerNavigationOptions 
} from '@react-navigation/drawer';
import LoginScreen from '../HealthApp/android/app/src/screens/LoginScreen';
import SignupScreen from '../HealthApp/android/app/src/screens/SignupScreen';

// 1. Strongly typed route parameters
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

// 2. Type-safe drawer navigator
const Drawer = createDrawerNavigator<RootStackParamList>();

// 3. Screen options configuration
const screenOptions: DrawerNavigationOptions = {
  headerShown: true,
  drawerPosition: 'left',
  drawerType: 'front',
  overlayColor: 'transparent',
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        <Drawer.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'User Login' }}
        />
        <Drawer.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{ title: 'Create Account' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
