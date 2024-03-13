import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DashboardScreen = () => {
  const recentDocuments = [
    { id: 1, title: 'Document 1', date: '2024-03-13' },
    { id: 2, title: 'Document 2', date: '2024-03-12' },
    { id: 3, title: 'Document 3', date: '2024-03-11' },
  ];

  const pendingLeaveRequests = [
    { id: 1, type: 'Sick Leave', startDate: '2024-03-14', endDate: '2024-03-15' },
    { id: 2, type: 'Event', startDate: '2024-03-18', endDate: '2024-03-22' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome, Mr Bashir!</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Documents</Text>
        {recentDocuments.map((doc) => (
          <Text key={doc.id} style={styles.item}>{doc.title} - {doc.date}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending Leave Requests</Text>
        {pendingLeaveRequests.map((request) => (
          <Text key={request.id} style={styles.item}>{request.type}: {request.startDate} to {request.endDate}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
});

export default DashboardScreen;
