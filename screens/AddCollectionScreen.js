import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemEditComponent from '../components/ItemEditComponent';

export default function AddCollectionScreen() {

    const itemProps={
        title: '',
        brand : '',
        imagePath: 'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg',
        type: 'collection',
        buttonTitle: 'ADD'
        

    };
  return (
    <View>
      <ItemEditComponent {...itemProps} />
    </View>
  )
}

const styles = StyleSheet.create({})