// categoryService.js
import { saveData, loadData } from './storage';
import Category from '../models/category';

const CATEGORY_KEY = 'categories';

export const getAllCategories = async () => {
  return await loadData(CATEGORY_KEY);
};

export const addCategory = async (newCategory) => {
  const categories = await getAllCategories();
  categories.push(newCategory);
  await saveData(CATEGORY_KEY, categories);
};

export const updateCategory = async (updatedCategory) => {
  let categories = await getAllCategories();
  categories = categories.map(cat => 
    cat.id === updatedCategory.id ? updatedCategory : cat
  );
  await saveData(CATEGORY_KEY, categories);
};

export const deleteCategory = async (categoryId) => {
  let categories = await getAllCategories();
  categories = categories.filter(cat => cat.id !== categoryId);
  await saveData(CATEGORY_KEY, categories);
};
