import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid';
export default function CategoryScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        //itemData.item.
        var item = itemData.item;
        function pressHandler() {
            navigation.navigate('CollectionScreen', { categoryId: item.id, });
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
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={
                    renderCategoryItem
                }
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
        felx: 1,
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