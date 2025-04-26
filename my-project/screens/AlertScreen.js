import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyAlerts = [
  { id: '1', title: 'Pill not taken', time: '2023-05-15T09:00:00Z' },
  { id: '2', title: 'Pill is empty', time: '2023-05-14T18:30:00Z' },
  { id: '3', title: 'Pill not taken', time: '2023-05-14T09:00:00Z' },
  { id: '4', title: 'Pill is running low', time: '2023-05-13T12:00:00Z' },
];

const AlertsScreen = () => {
  const renderAlertItem = ({ item }) => (
    <View style={styles.alertItem}>
      <View style={styles.timeline}>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{item.title}</Text>
        <Text style={styles.alertTime}>{new Date(item.time).toLocaleString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <FlatList
        data={dummyAlerts}
        renderItem={renderAlertItem}
        keyExtractor={(item) => item.id}
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
  alertItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeline: {
    width: 20,
    alignItems: 'center',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'tomato',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: 'tomato',
    marginTop: 5,
  },
  alertContent: {
    flex: 1,
    marginLeft: 10,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertTime: {
    color: '#666',
  },
});

export default AlertsScreen;

