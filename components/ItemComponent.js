import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

export default function ItemComponent({ id, title, brand, imagePath }) {
    return (
        <View style={styles.mainContainer}>
            <Pressable style={({ pressed }) =>
                pressed ? styles.itemPressed : null
            }>
                <View style={styles.innerView}>
                    <View>
                        <Image source={{ uri: imagePath }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.brand}>{brand}</Text>
                    </View>
                </View>
            </Pressable>
        </View>


    )
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 15,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10,
    },
    innerView: {

    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    brand: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 5,
    },
    itemPressed: {
        opacity: 0.5,
    },
})