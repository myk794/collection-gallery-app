import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid';
export default function CategoryScreen() {

    function renderCategoryItem(itemData) {
        //itemData.item.
        var item = itemData.item;
        return <CategoryGrid id={item.id} title={item.title} imagePath={item.imagePath} />;
    }
    return (
        <View style={styles.main}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={
                    renderCategoryItem
                }
                numColumns={2}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#161616',
    },
})