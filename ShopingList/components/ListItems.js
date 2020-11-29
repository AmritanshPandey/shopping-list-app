import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ListItems = ({item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  checkedItems,
}) => {
  const checked = checkedItems.filter(
    checkedItems => checkedItems.id === item.id,
  );
  
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
          {isEditing && editItemDetail.id === item.id ?  (
            <TextInput
            placeholder="Tap here to edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
            /> 
          ) : (
            <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedItemText : styles.listItemText
            }>
              {item.text}
            </Text>
          )}

          <View style={styles.iconView}>
          {isEditing && editItemDetail.id === item.id ?  (
            <Icon
              name="content-save"
              size={24}
              color="#361d32"
              onPress={() => saveEditItem(item.id, item.text)}
              />
          ) : (
            !checked.length && (
              <Icon
                name="pencil"
                size={30}
                color="#543c52"
                onPress={() => editItem(item.id, item.text)}
                />
            )
          )}

          <Icon 
           name="close"
            size={30}
            color="#543c52" 
            onPress={() => deleteItem(item.id)} 
           />
        </View>
      </View>
    
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#edd2cb',
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
        margin: 10,
        borderRadius: 6,
        height: 60,
    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    listItemText: {
        fontSize: 18,
    },

    checkedItemText: {
      fontSize: 18,
      textDecorationLine: 'line-through',
      color: '#543c52'
    },

    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 70,
    },

    editItemInput: {
      padding: 0,
      fontSize: 18,
    },


});

export default ListItems;