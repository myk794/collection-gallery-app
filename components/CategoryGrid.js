import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

export default function CategoryGrid({ id, title, imagePath }) {
    return (
        <View style={styles.mainContainer}>
            <Pressable style={({pressed})=> [styles.item,
                pressed ? styles.itemPressed : null,
            ]}>
                <View style={styles.insideView}>

                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: imagePath }} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: 150,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: 15,
        borderRadius: 20,
        backgroundColor: '#323232',
    },
    item: {
        flex: 1,
    },
    insideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 10,

    },
    title: {
        marginBottom: 10,
        color: 'white',
        fontSize: 18,

    },
    itemPressed:{
        opacity: 0.5,
    }
})