import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBox = ({ sections }) => {
  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionText}>{section}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 20,
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  sectionText: {
    fontWeight: 'bold',
  },
});

export default TopBox;

