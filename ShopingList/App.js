import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import ListItems from './components/ListItems';

  const App = () => {
    const [items, setItems] = useState([
      {
        id: uuidv4(),
        text: 'Milk',
      },
      {
        id: uuidv4(),
        text: 'Eggs',
      },
      {
        id: uuidv4(),
        text: 'Bread',
      },
      {
        id: uuidv4(),
        text: 'Juice',
      },
    ]);
  
const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });
}

  return (
    <SafeAreaView style={styles.container}>
     <Header title="Shopping List" />
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