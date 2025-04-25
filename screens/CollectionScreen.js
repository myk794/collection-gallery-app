import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { ITEMS, CATEGORIES } from '../data/dummy-data';
import ItemComponent from '../components/ItemComponent';
import { useLayoutEffect } from 'react';
export default function CollectionScreen({ route, navigation }) {

    const categoryId = route.params.categoryId;
    const displayedItems = ITEMS.filter((collectionItem) => {
        return collectionItem.categoryId === categoryId;
    });

    useLayoutEffect(() => {
        const categorytitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categorytitle,
        });
        console.log(categorytitle);
    }, [navigation, categoryId]);


    function renderItems(itemData) {
        const itemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            brand: itemData.item.brand,
            imagePath: itemData.item.imagePath,

        };
        return <ItemComponent {...itemProps} />
    }
    const onAddButton = () => {
        navigation.navigate('AddCollectionScreen');
    }
    return (
        <View style={styles.main}>
            <FlatList
                data={displayedItems}
                keyExtractor={(item) => item.id}
                renderItem={renderItems}
            />
            <TouchableOpacity style={styles.floatingButton} onPress={onAddButton}>
                <Text style={styles.floatingButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#161616',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'orange',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Android için gölge
        shadowColor: '#000', // iOS için gölge
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      floatingButtonText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        paddingBottom: 5,
      },
})