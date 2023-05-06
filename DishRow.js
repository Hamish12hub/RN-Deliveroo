import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
// import Currency  from 'react-currency-formatter'

export default function DishRow({id,name ,description, price, image}) {

  const [isPressed, setIsPressed] = useState(false);

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  const minus = () => {
    if(count == 0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
  }

  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
    className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
      <View className="flex-row">
          <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">{price}</Text>
        </View>
        

        <View>
            <Image style={{borderWidth: 1, borderColor: "#F3F3F4"}} source={{ uri: image}} className="h-20 w-20 bg-gray-300 p-4" />
        </View>
        </View>
    </TouchableOpacity>

    {isPressed && (
      <View className="bg-white px-4">
      <View className="flex-row items-center space-x-2 pb-3">
        <TouchableOpacity onPress={minus}>
          <MinusCircleIcon color={count != 0 ? "#00CCBB" : "gray"} size={40} />
        </TouchableOpacity>

        <Text>{count}</Text>

        <TouchableOpacity onPress={add}>
          <PlusCircleIcon color="#00CCBB" size={40}/>
        </TouchableOpacity>
      </View>
      </View>
  )}

    </>
  )
}
       

// color={item.length > 0 ?"#00CCBB" : "gray"}