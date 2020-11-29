import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

  return (
   <View>
       <TextInput
        placeholder="Tap here to add Item..." 
        style={styles.input} 
        onChangeText={onChange} 
        />

       <TouchableOpacity 
       style={styles.btn} 
       onPress={() => {
           addItem(text);
           setText('')
           }}>

           <Text style={styles.btnText}>
               <Icon name="plus" size={20} /> Add Item
            </Text>
       </TouchableOpacity>
   </View>
  );
};



const styles = StyleSheet.create({
input: {
    height: 60,
    padding: 8,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
},

btn: {
    backgroundColor: '#f55951',
    padding: 14,
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    borderRadius: 5,
},

btnText: {
    color: '#f1e8e6',
    fontSize: 20,
    textAlign: "center",
},

});

export default AddItem;