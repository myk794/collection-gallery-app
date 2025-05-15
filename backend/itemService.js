// itemService.js
import { saveData, loadData } from './storage';
import Item from '../models/item';

const ITEM_KEY = 'items';

export const getAllItems = async () => {
  return await loadData(ITEM_KEY);
};
export const getItemById = async (itemId) => {
  const items = await getAllItems();
  const item = items.find(item => item.id === itemId);
  return item;
};
export const getItemsByCategoryId = async (categoryId) => {

  const items = await getAllItems();
  return items.filter(item => item.categoryId === categoryId);
};

export const addItem = async (newItem) => {
  const items = await getAllItems();
  items.push(newItem);
  await saveData(ITEM_KEY, items);
};

export const updateItem = async (updatedItem) => {
  let items = await getAllItems();
  items = items.map(item =>
    item.id === updatedItem.id ? updatedItem : item
  );
  await saveData(ITEM_KEY, items);
};

export const deleteItem = async (itemId) => {
  try {

    let items = await getAllItems();
    const updatedItems = items.filter(item => item.id !== itemId);
    await saveData(ITEM_KEY, updatedItems);
  } catch (error) {
    console.error('Error while deleting item:', error);
  }

};
