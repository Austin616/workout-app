import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} className="bg-blue-500 p-4 rounded-lg mb-4">
    <Text className="text-white text-lg font-semibold">{title}</Text>
  </TouchableOpacity>
)

const WorkoutTracker = () => {
  const [count, setCount] = useState(0)

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <Text className="text-white text-3xl font-bold mb-4">Workout Tracker</Text>
      <Text className="text-white text-lg mb-6">Track your workouts here!</Text>
      <Text className="text-white text-sm mb-4">
        Stay consistent and achieve your fitness goals with our app.
      </Text>
      <Text className="text-white text-xl mb-4">Workout Count: {count}</Text>
      <Button title="Add Workout" onPress={() => setCount(count + 1)} />
    </View>
  )
}

export default WorkoutTracker
