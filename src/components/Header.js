import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daraul Huda</Text>
      <Text style={styles.titleSlogan}>Staff HR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "navy"
  },
  titleSlogan: {
    fontSize: 18,
    color: "black"
  },
});

export default Header;