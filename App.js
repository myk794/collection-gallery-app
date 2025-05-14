import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollectionScreen from './screens/CollectionScreen';
import ItemScreen from './screens/ItemScreen';
import AddCollectionScreen from './screens/AddCollectionScreen';
import EditCollectionScreen from './screens/EditCollectionScreen';
import AddItemScreen from './screens/AddItemScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} 
        options={{ title: 'Collection Gallery',headerStyle: {
        backgroundColor: '#161616',}, headerTintColor: '#fff',} 
      }/>
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="AddCollectionScreen" component={AddCollectionScreen} />
        <Stack.Screen name="EditCollectionScreen" component={EditCollectionScreen} 
        options={{title: 'Edit Collection Info'}}/>
        <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
