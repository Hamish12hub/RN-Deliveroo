import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { XCircleIcon } from "react-native-heroicons/solid"

export default function BasketScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-gray-100">
      <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
        <View>
      <Text className="text-lg font-bold text-center">Basket</Text>
      <Text className="text-center text-gray-400">Yo! Sushi</Text>
    </View>
    <TouchableOpacity onPress={navigation.goBack}
    className="rounded-full bg-gray-100 absolute top-3 right-5">
      <XCircleIcon color="#00CCBB" height={50} width={50} />
    </TouchableOpacity>
    </View>

    <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
      <Image source={{ uri: "https://links.papareact.com/wru"}} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
      <Text className="flex-1">Deliver in 50-70 min</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCBB]">Change</Text>
      </TouchableOpacity>
    </View>

    <ScrollView className="divide-y divide-gray-200">
      
      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">4 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$4</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">6 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$2</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">3 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$1</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">8 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$6</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">4 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$4</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">6 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$2</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">3 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$1</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
        <Text className="text-[#00CCBB]">8 x</Text>
        <Image source={{ uri: "https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full"/>
        <Text className="flex-1">Sushi roll</Text>
        <Text className="text-gray-600">$6</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]" onPress={() => alert("Remove from List")}>Remove</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>

    <View className="p-5 bg-white mt-5 space-y-4">
      
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Subtotal</Text>
        <Text className="text-gray-400">$158.00</Text>
      </View>
    
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">$5.99</Text>
      </View>
    
      <View className="flex-row justify-between">
        <Text className="text-gray-400">Order Total</Text>
        <Text className="font-extrabold">$163.99</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4">
        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
      </TouchableOpacity>
    
    </View>
    </View>
    </SafeAreaView>
  )
}


