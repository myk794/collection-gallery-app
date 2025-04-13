import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { ITEMS,CATEGORIES } from '../data/dummy-data';
import ItemComponent from '../components/ItemComponent';
import { useLayoutEffect } from 'react';
export default function CollectionScreen({ route,navigation }) {

    const categoryId = route.params.categoryId;
    const displayedItems = ITEMS.filter((collectionItem) => {
        return collectionItem.categoryId === categoryId;
    });

    useLayoutEffect(()=>{
        const categorytitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({
        title: categorytitle,
    });
    console.log(categorytitle);
    },[navigation, categoryId]);

    
    function renderItems(itemData){
        const itemProps={
            id: itemData.item.id,
            title: itemData.item.title,
            brand : itemData.item.brand,
            imagePath: itemData.item.imagePath,

        };
        return <ItemComponent {...itemProps} />
    }
    return (
        <View>
            <FlatList
            data={displayedItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItems}
            />
        </View>
    )
}

const styles = StyleSheet.create({})