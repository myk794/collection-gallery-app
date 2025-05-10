import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAllCategories,deleteCategory } from '../backend/categoryService';
import CategoryGrid from '../components/CategoryGrid';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
export default function CategoryScreen({ navigation }) {


    const [categories, setCategories] = useState([]);

    useFocusEffect(
        useCallback(() => {
          const fetchCategories = async () => {
            const data = await getAllCategories();
            setCategories(data);
            for (let index = 0; index < categories.length; index++) {
                const element = array[index];         
            }
          };
          fetchCategories();
        }, [])
      );
    function renderCategoryItem(itemData) {
        //itemData.item.
        var item = itemData.item;
        function pressHandler() {
            navigation.navigate('CollectionScreen', { displayedCategory: item, });
        }

        return <CategoryGrid id={item.id}
            title={item.title}
            imagePath={item.imagePath}
            onPressCategory={pressHandler}
        />;
    }

    const onAddButton = () => {
        navigation.navigate('AddCollectionScreen');
    }
    return (
        <View style={styles.main}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                ListEmptyComponent={<Text style={styles.emptyText}>Category not found.</Text>}
                numColumns={2}
            />
            <TouchableOpacity style={styles.floatingButton} onPress={onAddButton}>
                <Text style={styles.floatingButtonText}>+</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#161616',
        flex: 1,
    },
    emptyText:{
        color: 'white',
        
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