import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function Icon({ name, size = 20, backgroundColor = colors.primary, iconColor = colors.white }) {
  return (
    <View style={[styles.iconContainer, { backgroundColor }]}>
      <MaterialCommunityIcons 
        name={name}
        size={size}
        color={iconColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Icon; 