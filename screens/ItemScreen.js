import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITEMS } from '../data/dummy-data';
import ItemComponent from '../components/ItemComponent';
import ItemEditComponent from '../components/ItemEditComponent';
export default function ItemScreen({route}) {

    const itemId= route.params.itemId;
    const selectedItem = ITEMS.find((item) => item.id === itemId);

    const itemProps={
        title: selectedItem.title,
        brand : selectedItem.brand,
        imagePath: selectedItem.imagePath,
        type: 'item',
        buttonTitle: "UPDATE",
        

    };
  return (
    <View>
              
              <ItemEditComponent {...itemProps} />
    </View>
  )
}

const styles = StyleSheet.create({})