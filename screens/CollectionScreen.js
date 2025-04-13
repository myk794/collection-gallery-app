import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CollectionScreen({route}) {

    const categoryId = route.params.categoryId;
  return (
    <View>
      <Text>CollectionScreen - {categoryId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})