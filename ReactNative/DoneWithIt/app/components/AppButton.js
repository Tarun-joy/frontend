import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const { height ,width } = Dimensions.get('window');
const BUTTON_WIDTH = width * 0.85;
const BUTTON_HEIGHT = height * 0.07;

function AppButton({ title, onPress, color}) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 25,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,   
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AppButton; 