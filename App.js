import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './global.css';
import HomeScreen from 'screens/HomeScreen';
import WorkoutTracker from 'screens/WorkoutTracker';
import FoodTracker from 'screens/FoodTracker';
import CustomHeader from './components/CustomHeader'; // Import CustomHeader
import ProfileScreen from 'screens/ProfileScreen';
import SettingsScreen from 'screens/SettingsScreen';

// Define the Stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomHeader {...props} title={props.route.name} />, // Set CustomHeader for all screens
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkoutTracker} />
        <Stack.Screen name="FoodTracker" component={FoodTracker} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
