import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState('');




const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });



const addItem = text => {
  if(!text) {
    Alert.alert(
      'No item entered',
      'Please enter an item when adding to your shoping list',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  } else {
    setItems(prevItems => {
      return [{id: uuidv4(), text},...prevItems];
    });
  }

};

  return (
    <SafeAreaView style={styles.container}>
     <Header title="Shopping List" />
     <AddItem addItem={addItem}/>
     <FlatList data={items} 
     renderItem={({item}) => <ListItems item={item}
     deleteItem={deleteItem} />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})

export default App;