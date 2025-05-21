import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function AppTest() {
  function handlePress() {
    Alert.alert('Feedback', 'How do you like this app so far?', [
                                            {text: 'Good', onPress: () => {
                                              return Alert.alert('Thank you for your feedback! He loves you to moon and back ❤️')
                                            }},
                                            {text: 'Bad', onPress: () => {
                                              return Alert.alert('We are always looking to improve our app. We will ger back to you shortly')
                                            }},
                                              ]);
  }

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>Hello Roopa!! This is Tarun's first IOS app</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Press Here</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#4CAF50',
    maxWidth: '35%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  }
});












