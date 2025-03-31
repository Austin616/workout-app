import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class FoodTracker extends Component {
  render() {
    return (
      <View className="flex-1 bg-gray-900 justify-center items-center">
        <Text className="text-white text-3xl font-bold mb-4">Food Tracker</Text>
        <Text className="text-white text-lg mb-6">Track your food intake here!</Text>
        {/* Placeholder for food tracking functionality */}
        <Text className="text-white text-sm mb-4">
          Stay consistent and achieve your fitness goals with our app.
        </Text>
        {/* Placeholder for food tracking functionality */}
      </View>
    )
  }
}

export default FoodTracker
