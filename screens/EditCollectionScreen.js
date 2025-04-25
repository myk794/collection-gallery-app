import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data';
import ItemEditComponent from '../components/ItemEditComponent';

export default function EditCollectionScreen({route}) {
    
    const categoryID= route.params.categoryId;
    console.log(categoryID);
        const selectedItem = CATEGORIES.find((item) => item.id === categoryID);
    
        const itemProps={
            title: selectedItem.title,
            imagePath: selectedItem.imagePath,
            type: 'collection',
            buttonTitle: "UPDATE",
    
        };
    return (
    <View>

      <ItemEditComponent {...itemProps} />
    </View>
  )
}

const styles = StyleSheet.create({})