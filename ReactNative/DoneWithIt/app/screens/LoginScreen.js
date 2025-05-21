import React from 'react';
import { StyleSheet, Image, View, Button } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-red.png')}
          style={styles.logo}
        />
      </View>
      <AppForm
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        <AppFormField 
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormField 
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />     
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
  },
  error: {
    color: colors.danger,
  }
});

export default LoginScreen;
