import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";
import { deleteData } from '../backend/storage';
import { addCategory,deleteCategory } from '../backend/categoryService';
import Category from '../models/category';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
export default function ItemEditComponent({ id, title, brand, imagePath, type, buttonTitle }) {

    const navigation = useNavigation();
    const [itemImage, setItemImage] = useState(imagePath);
    const [_title, setTitle] = useState(title);
    const [_brand, setBrand] = useState(brand);
    const submitData = () => {
        
        switch (type) {
            case 'collection':
                if(buttonTitle === 'ADD'){
                    addNewCategory();
                }
                else if(buttonTitle === 'UPDATE'){

                }
                else{
                    console.log("Error buttonTitle at ItemEditComponent.js");
                }
                break;

            case 'item':

                break;
            default:
                console.log("Error name of type at ItemEditComponent.js");
                break;
        }
        //TYPE "item" / "collection"
        //buttonTitle "ADD" / "UPDATE"
        //TYPE ve buttonTitle'a GORE ISLEM YAP 
        let newTitle = _title === '' ? title : _title;
        let newBrand = _brand === '' ? brand : _brand;
        let newImagePath = itemImage;
        //UPDATE DATA
    }
    async function addNewCategory(){
        const newID = uuid.v4();
        const newCategory = new Category(newID, _title, itemImage);
        console.log(_title);
        console.log(itemImage);
        await addCategory(newCategory);
        navigation.goBack();


    }
    async function deleteDataFromDB(){
        console.log(`Removing item : ${id}`);
        await deleteCategory(id);
        navigation.navigate("CategoryScreen");
    }
    const pickImage = async () => {
        try {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            if (!result.canceled) {
                await saveImage(result.assets[0].uri);
            }
        } catch (error) {

            throw error;
        }
    }

    const saveImage = async (image) => {
        try {
            setItemImage(image);
        } catch (error) {
            throw error;
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerView}>
                <View>
                    <Pressable style={({ pressed }) =>
                        pressed ? styles.itemPressed : null
                    }
                        onPress={pickImage}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: itemImage }} style={styles.image} />
                            <Text style={styles.watermark}>Edit</Text>
                        </View>
                    </Pressable>
                    <Text style={styles.inputTitle}>Title:</Text>
                    <TextInput style={styles.title} placeholder={title} onChangeText={setTitle} />
                    {type === 'item' && (
                        <>
                            <Text style={styles.inputTitle}>Brand:</Text>
                            <TextInput style={styles.brand} placeholder={brand} onChangeText={setBrand} />
                        </>
                    )}

                </View>
            </View>
            <View style={styles.buttonContainer}>

                <Button style={styles.button}
                    title={buttonTitle}
                    color="#525252"
                    onPress={submitData}
                />
            </View>
            {buttonTitle === 'UPDATE' && (

            <>
                <View style={styles.buttonContainer}>

                    <Button style={styles.button}
                        title="DELETE"
                        color="#eb4034"
                        onPress={deleteDataFromDB}
                    />
                </View>
            </>
            )}

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
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,

        marginHorizontal: 15,
        borderColor: 'gray',
    },
    brand: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        fontSize: 14,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
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
    buttonContainer: {
        marginVertical: 8,
        marginHorizontal: 15,

    },
    inputTitle: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
})