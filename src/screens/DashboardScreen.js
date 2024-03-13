import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LogoutButton from '../components/LogoutButton';
import LoginScreen from './LoginScreen';

const DashboardScreen = ({ navigation }) => {
  const recentDocuments = [
    { id: 1, title: 'Document 1', date: '2024-03-13' },
    { id: 2, title: 'Document 2', date: '2024-03-12' },
    { id: 3, title: 'Document 3', date: '2024-03-11' },
  ];

  const pendingLeaveRequests = [
    { id: 1, type: 'Sick Leave', startDate: '2024-03-14', endDate: '2024-03-15' },
    { id: 2, type: 'Event', startDate: '2024-03-18', endDate: '2024-03-22' },
  ];

  handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.welcomeName}>Welcom Back, Mr Bashir!</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Documents</Text>
        {recentDocuments.map((doc) => (
          <TouchableOpacity key={doc.id} style={styles.item}>
            <Text style={styles.itemText}>{doc.title}</Text>
            <Text style={styles.itemDate}>{doc.date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Leave Requests</Text>
        {pendingLeaveRequests.map((request) => (
          <TouchableOpacity key={request.id} style={styles.item}>
            <Text style={styles.itemText}>{request.type}</Text>
            <Text style={styles.itemDate}>{request.startDate} to {request.endDate}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <LogoutButton onPress={handleLogout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "navy"
  },
  welcomeName: {
    fontSize: 14,
    marginBottom: 20,
    color: "navy"
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default DashboardScreen;
