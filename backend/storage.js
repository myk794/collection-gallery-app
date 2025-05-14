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
    const value1 = await AsyncStorage.getItem(key);
    console.log('Value BEFORE removal:', value1);
    console.log(`Deleted id: ${key}`);
    await AsyncStorage.removeItem(key);
    console.log("Item Deleted");
    const value = await AsyncStorage.getItem(key);
    console.log('Value after removal:', value);
  } catch (e) {
    console.error(`Error deleting data for ${key}`, e);
  }
};
