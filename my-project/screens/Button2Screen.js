import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Button2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Button 2 Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Button2Screen;

