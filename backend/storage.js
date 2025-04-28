// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Error saving data for ${key}`, e);
  }
};

export const loadData = async (key) => {
  try {

    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(`Error loading data for ${key}`, e);
    return [];
  }
};

export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Item Deleted");
  } catch (e) {
    console.error(`Error deleting data for ${key}`, e);
  }
};
