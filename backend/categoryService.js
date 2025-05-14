// categoryService.js
import { saveData, loadData, deleteData } from './storage';
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

export const deleteCategory = async (id) => {
  try {
    // 1. Tüm kategorileri al
    const categories = await getAllCategories();

    // 2. Silinecek kategori dışındakileri filtrele
    const updatedCategories = categories.filter(category => category.id !== id);

    // 3. Güncellenmiş listeyi kaydet
    await saveData(CATEGORY_KEY, updatedCategories);

    console.log(`Kategori ${id} başarıyla silindi.`);
  } catch (error) {
    console.error('Kategori silinirken hata oluştu:', error);
  }
};
