import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';
import { Swipeable } from 'react-native-gesture-handler';
import AppText from '../AppText';

function ListItem({ title, description, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {description && <AppText style={styles.description} numberOfLines={2}>{description}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '500',
  },
  description: {
    color: colors.medium,
  },
});

export default ListItem; 