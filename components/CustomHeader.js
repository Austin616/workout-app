// components/CustomHeader.js
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const CustomHeader = ({ title, navigation }) => {
  return (
    <View className="flex-row justify-between items-center bg-gray-800 px-4 py-3">
      {/* App Title */}
      <Text className="text-white text-xl font-bold">{title}</Text>

      {/* Profile & Settings Buttons */}
      <View className="flex-row space-x-4">
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/profile.png')} // Add a profile icon to assets
            className="w-6 h-6" // Slightly smaller
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../assets/settings.png')} // Add a settings icon to assets
            className="w-6 h-6" // Slightly smaller
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomHeader
