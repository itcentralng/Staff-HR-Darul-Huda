import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import DashboardScreen from './DashboardScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Main', { screen: 'Dashboard' });
  };
  

  return (
    <View style={styles.container}>
      <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiLz6Rnxh_XPtDCSmZHRNY6mja4o7AMd7D11ugRxXONPr-WW9' }}
  style={styles.imageTop}
/>
      <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiLz6Rnxh_XPtDCSmZHRNY6mja4o7AMd7D11ugRxXONPr-WW9' }}
  style={styles.imageBottom}
/>
      <Header />
      <InputField
        placeholder="Email Address"
        onChangeText={(text) => setUsername(text)}
        iconName="user"
      />
      <InputField
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        iconName="lock"
      />
      <LoginButton onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  imageTop: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    position: "absolute",
    top: -30,
    left: -30,
  },
  imageBottom: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    position: "absolute",
    bottom: -50,
    right: -50,
  },
});

export default LoginScreen;
