import Category from '../models/category';
import Item from '../models/item';

export const CATEGORIES = [
  new Category('c1', 'İtalyan', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c2', 'Aperatif', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c3', 'Hamburger', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c4', 'Alman', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c5', 'Diyet', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c6', 'Egzotik', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c7', 'Kahvaltı', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c8', 'Hint', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
];

export const ITEMS = [
  new Item(
    'm1',
    'c1',
    'Domates soslu Spagetti',
    'brand',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'
  ),
  new Item(
    'm2',
    'c2',
    'Tost',
    'brand',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'
  ),
  new Item(
    'm3',
    'c3',
    'Hamburger',
    'brand2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'
  ),
  new Item(
    'm4',
    'c4',
    'Tavuk Sote',
    'brand3',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg'
  ),
  new Item(
    'm5',
    'c5',
    'Balıklı Salata',
    'brand4',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg'
  ),
  new Item(
    'm6',
    'c6',
    'Portakallı Muhallebi',
    'brandd',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg'
  ),
  new Item(
    'm7',
    'c7',
    'Pankek',
    'uygun',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'
  ),
  new Item(
    'm8',
    'c8',
    'Tavuklu Hint Yemeği',
    'mini gt',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg'
  ),

  new Item(
    'm10',
    'c3',
    'Çilekli Yaz Salatası',
    'rolex',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg'
  ),
];
