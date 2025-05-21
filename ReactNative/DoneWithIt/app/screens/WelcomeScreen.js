import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, Dimensions } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

const { height } = Dimensions.get('window');

function WelcomeScreen() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
        <View style={styles.buttonsContainer}>
          <AppButton title="REGISTER" color={colors.primary} onPress={() => console.log('Register')} />
          <AppButton title="LOGIN" color={colors.secondary} onPress={() => console.log('Login')} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  tagline: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default WelcomeScreen; 