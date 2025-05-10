import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { getItemsByCategoryId } from '../backend/itemService';
import ItemComponent from '../components/ItemComponent';
import { useLayoutEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function CollectionScreen({ route, navigation }) {

    const displayedCategory = route.params.displayedCategory;
    const categoryId = displayedCategory.id;
    const displayedItems = async () => {
        await getItemsByCategoryId(categoryId);
    }
    function onPressEdit(){
        console.log('Edit icon pressed');
        navigation.navigate('EditCollectionScreen',{ categoryId: categoryId, });
    }
    useLayoutEffect(() => {
        const categorytitle = displayedCategory.title;
        navigation.setOptions({
            title: categorytitle,
            headerRight: () => (
                <TouchableOpacity onPress={onPressEdit} style={{ marginRight: 15 }}>
                    <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
            ),
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