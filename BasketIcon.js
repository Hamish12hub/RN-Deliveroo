import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BasketIcon() {

  // to not display the basket
  // if(0 === 0) return null;

  const navigation = useNavigation()
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity 
      onPress={() => navigation.navigate("Basket")}
      className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
      <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">4</Text>
      <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
      <Text className="text-lg text-white font-extrabold"> $16</Text>
      </TouchableOpacity>
    </View>
  )
}