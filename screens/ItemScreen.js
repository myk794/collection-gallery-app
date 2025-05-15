import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getItemsByCategoryId } from '../backend/itemService';
import ItemComponent from '../components/ItemComponent';
import ItemEditComponent from '../components/ItemEditComponent';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { getItemById } from '../backend/itemService';
export default function ItemScreen({ route }) {

  const itemId = route.params.itemId;
  const [displayedItem, setDisplayedItem] = useState([]);
      useFocusEffect(
              useCallback(() => {
                  const fetchItems = async () => {
                      const item = await getItemById(itemId);
      
                      setDisplayedItem(item);
                  };
                  fetchItems();
              }, [])
          );
  const itemProps = {
    id: itemId,
    title: displayedItem.title,
    brand: displayedItem.brand,
    imagePath: displayedItem.imagePath,
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