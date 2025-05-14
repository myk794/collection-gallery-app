import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemEditComponent from '../components/ItemEditComponent';
export default function AddItemScreen({ route }) {
    const categoryID = route.params.categoryID;
    const itemProps = {
        id: categoryID,
        title: '',
        brand: '',
        imagePath: 'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg',
        type: 'item',
        buttonTitle: 'ADD'


    };
    return (
        <View>
            <ItemEditComponent {...itemProps} />
        </View>
    )
}

const styles = StyleSheet.create({})