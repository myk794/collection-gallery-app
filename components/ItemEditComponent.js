import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'

export default function ItemEditComponent({ id, title, brand, imagePath }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerView}>
                <View>
                    <Pressable style={({ pressed }) =>
                        pressed ? styles.itemPressed : null
                    }
                        onPress={() => { }}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: imagePath }} style={styles.image} />
                            <Text style={styles.watermark}>Edit</Text>
                        </View>
                    </Pressable>
                    <Text>Title:</Text>
                    <TextInput style={styles.title} placeholder={title} />
                    <Text>Brand:</Text>
                    <TextInput style={styles.brand} placeholder={brand} />
                </View>
            </View>

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
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        borderColor: 'gray',
    },
    brand: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        borderColor: 'gray',
    },
    itemPressed: {
        opacity: 0.5,
    },
    imageContainer: {
        position: 'relative',
        
      },
      
      watermark: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        paddingHorizontal: 6,
        paddingVertical: 2,
        fontSize: 12,
        borderRadius: 4,
        overflow: 'hidden',
      },
})