import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { XIcon, StarIcon, XCircleIcon } from "react-native-heroicons/solid"
// import MapView, { Marker } from "react-native-maps"

export default function DeliveryScreen() {
    const navigation = useNavigation();

  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
       <View className="flex-row justify-between items-center p-5">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <XCircleIcon color="white" size={30}/>
        </TouchableOpacity>
        <Text className="font-light text-white text-lg">Order Help</Text>
       </View>

       <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">

        <View className="flex-row justify-between">
        <View>
            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
            <Text className="text-4xl font-bold">45-55 Minutes</Text>
        </View>
        <Image source={{uri: "https://links.papareact.com/fls",}}
        className="h-20 w-20"/>
       </View>
       
       <Text className="mt-3 text-gray-500">Your order at Yo! Sushi is being prepared</Text>

       </View>

        </SafeAreaView>

        <View className="flex-1 -mt-10 z-0 bg-gray-200">
        </View>

        <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
            <Image source={{uri: "https://links.papareact.com/wru"}}
            className="h-12 w-12 bg-gray-300 rounded-full ml-5" />
            <View className="flex-1"> 
                <Text className="text-lg">Sonny Sangha</Text>
                <Text className="text-gray-400">Your Rider</Text>
            </View>

            <Text className="text-[#00CCBB] flex-lg mr-5 font-bold">Call</Text>

        </SafeAreaView>
    </View>
  )
}