import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
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
    // Navigate to the 'Dashboard' tab
    navigation.navigate('Main', { screen: 'Dashboard' });
  };
  

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header />
      <InputField
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <InputField
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <LoginButton onPress={handleLogin} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
