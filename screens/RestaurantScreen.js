import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from "@react-navigation/native"

import { StarIcon, LocationMarkerIcon, QuestionMarkCircleIcon, ChevronRightIcon } from "react-native-heroicons/solid"

import DishRow from '../DishRow'
import BasketIcon from '../BasketIcon'
// import BasketIcon from './BasketIcon'

export default function RestaurantScreen() {

    const navigation = useNavigation()
    const {
        params: {
            id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
        }
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <>

    <BasketIcon />

    <ScrollView>
        <View className="relative">
            <TouchableOpacity onPress={navigation.goBack}>
        <Image
        source={{
            uri: imgUrl
        }}
        className="w-full h-56 bg-grey-300 p-4" />
        </TouchableOpacity>

        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row items-center space-x-1">
                        <StarIcon color="green" opacity={0.5} size={22}/>
                        <Text className="text-xs text-gray-500">
                            <Text>{rating}</Text> - {genre}
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        {/* <LocationMarkerIcon color="gray" opacity={0.4} size={22} /> */}
                        <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                    </View>
                </View>
                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
            <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
            <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
        </View>

        <View>
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$1" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$2" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$3" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$4" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$5" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$6" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$1" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$2" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$3" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$4" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$5" image="https://links.papareact.com/gn7"/>
            <DishRow  id={123} name="sushi roll" description="This a Test description for sush roll" price="$6" image="https://links.papareact.com/gn7"/>
        </View>

        </View>
    </ScrollView>
    </>
  )
}