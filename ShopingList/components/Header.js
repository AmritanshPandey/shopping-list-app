import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps  = {
  title: 'Shoping List',
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    padding: 14,
    backgroundColor: '#361d32'
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

});

export default Header;