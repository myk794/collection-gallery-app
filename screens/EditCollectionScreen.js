import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemEditComponent from '../components/ItemEditComponent';

export default function EditCollectionScreen({ route }) {
  const displayedCategory = route.params.category;
  const categoryID = displayedCategory.id;

  const itemProps = {
    id: categoryID,
    title: displayedCategory.title,
    imagePath: displayedCategory.imagePath,
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