import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBox from '../components/TopBox';

const SettingsScreen = () => {
  const sections = ['Account', 'Privacy', 'Notifications'];

  return (
    <View style={styles.container}>
      <TopBox sections={sections} />
      <Text style={styles.text}>Adjust your settings here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 20,
  },
});

export default SettingsScreen;

