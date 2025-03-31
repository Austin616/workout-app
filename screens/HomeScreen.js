import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      {/* Handle status bar to avoid overlap */}
      <StatusBar backgroundColor="#1F2937" barStyle="light-content" />

      {/* Engaging Header */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-3xl font-bold mb-4">
          Welcome to the Workout App!
        </Text>
        <Text className="text-white text-lg mb-6">
          Track your workouts and food easily.
        </Text>

        {/* Placeholder image for engagement */}
        <Image
          source={require('../assets/dumbell.png')} // Replace with your image path
          className="w-64 h-64 rounded-lg mb-4"
        />

        {/* Optional section for interactive elements */}
        <Text className="text-white text-sm mb-4">
          Stay consistent and achieve your fitness goals with our app.
        </Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View className="flex-row justify-around items-center bg-gray-800 p-4">
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('Workout')}
        >
          <Text className="text-white text-xl">Workout Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate('FoodTracker')}
        >
          <Text className="text-white text-xl">Food Tracker</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
