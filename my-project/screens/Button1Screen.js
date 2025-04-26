import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ReminderForm from '../components/Reminderform';

const Button1Screen = () => {
  const [reminders, setReminders] = useState([]);

  const handleSaveReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
  };



  // http://198.23.243.2:3000/
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button 1 Screen</Text>
      <ReminderForm onSave={handleSaveReminder} />
      <Text style={styles.subtitle}>Reminders:</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderTitle}>{item.title}</Text>
            <Text>{item.date.toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  reminderItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button1Screen;

