import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../Categories';
import FeaturedRow from "../FeaturedRow"

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image source={{
          uri: "https://links.papareact.com/wru"
        }} 
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">Current Location
          {/* <ChevronDownIcon size={20} color="#00CCBB" /> */}
          
          </Text>
        </View>

        {/* <UserIcon size={35} color="#00CCBB"/> */}

      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
      </View>

      <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}}>
        <Categories />

        <FeaturedRow title="Featured" description="Paid placments from our partners"
         id="123"/>

<FeaturedRow title="Featured" description="Paid placments from our partners"
        id="456"/>

<FeaturedRow title="Featured" description="Paid placments from our partners"
        id="789"/>

      </ScrollView>

    </SafeAreaView>
    
  )
}