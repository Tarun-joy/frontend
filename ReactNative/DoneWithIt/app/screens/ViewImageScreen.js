import { StyleSheet, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const { width, height } = Dimensions.get('window');
const BUTTON_SIZE = width * 0.10;
const BUTTON_PADDING = width * 0.05;

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color={colors.white} size={BUTTON_SIZE}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={BUTTON_SIZE}/>
      </TouchableOpacity>
      <Image 
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: height * 0.07,
    left: BUTTON_PADDING,
  },
  deleteButton: {
    position: 'absolute',
    top: height * 0.07,
    right: BUTTON_PADDING,
  },
  image: {
    width: width,
    height: height,
  },
});

export default ViewImageScreen;
