import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState('');


const [editStatus, editStatusChange] = useState(false);

const [editItemDetail, editItemDetailChange] = useState({
  id: null,
  text: null,
});

const [checkedItems, checkedItemChange] = useState([]);

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  });
};


const saveEditItem = (id, text) => {
  setItems(prevItems => {
    return prevItems.map(item =>
      item.id == editItemDetail.id ? {id, text: editItemDetail.text} : item,
      );
  });
  editStatusChange(!editStatus);
};


const handleEditChange = text => {
  editItemDetailChange({id: editItemDetail.id, text});
};


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

const editItem = (id, text) => {
  editItemDetailChange({
    id,
    text,
  });
  return editStatusChange(!editStatus);
};


const itemChecked = (id, text) => {
  const isChecked = checkedItems.filter(checkedItem => checkedItem.id === id);
  isChecked.length
  ? 
  checkedItemChange(prevItems => {
    return [...prevItems.filter(item => item.id !== id)];
  })
  :
  checkedItemChange(prevItems => {
    return [...prevItems.filter(item => item.id !== id), {id, text}];
  });
};

  return (
    <SafeAreaView style={styles.container}>
     <Header title="Shopping List" />
     <AddItem addItem={addItem}/>
     <FlatList 
     data={items} 
     renderItem={({item}) => (
     <ListItems 
     item={item}
     deleteItem={deleteItem}
     editItem={editItem}
     isEditing={editStatus}
     editItemDetail={editItemDetail}
     saveEditItem={saveEditItem}
     handleEditChange={handleEditChange}
     itemChecked={itemChecked}
     checkedItems={checkedItems}
    />
     )} 
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1e8e6"
  },

})

export default App;