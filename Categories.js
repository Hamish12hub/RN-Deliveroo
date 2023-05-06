import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 1" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 2" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 4" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 5" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 6" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 7" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 8" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 9" />
    <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 10" />

    </ScrollView>
  )
}