import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({ navigation, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State pour gérer le chargement

  const onLoginPress = async () => {
    try {
      setLoading(true); // Activer le chargement pendant le processus de connexion
      await handleLogin(email, password);
      setLoading(false); // Désactiver le chargement après la connexion réussie
      Alert.alert("Login in successfully!");
      navigation.replace('Home'); // Redirection après connexion réussie
    } catch (error) {
      setLoading(false); // Désactiver le chargement en cas d'erreur
      switch (error.code) {
        case 'auth/wrong-password':
          Alert.alert('Incorrect Password', 'The password you entered is incorrect.');
          break;
        case 'auth/user-not-found':
          Alert.alert('User Not Found', 'There is no user corresponding to the given email.');
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid Email', 'The email address is not valid.');
          break;
        default:
          Alert.alert('Login Error', error.message);
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/rn-social-logo.png')} style={styles.logo} />
      <Text style={styles.text}>RN Social App</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={onLoginPress}
      />

      <Text style={{ marginTop: 20, marginBottom: 20 }}>
        {loading && <ActivityIndicator size="large" />}
      </Text>
      
      <Pressable style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </Pressable>

      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => Alert.alert('Facebook button pressed')}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => Alert.alert('Google button pressed')}
      />

      <Pressable style={styles.forgotButton} onPress={() => navigation.replace('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default LoginScreen;