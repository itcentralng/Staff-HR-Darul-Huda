import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaveRequestDetailsScreen = ({ route }) => {
  const requestDetails = {
    id: '001',
    leaveType: 'Annual Leave',
    startDate: '2024-03-15',
    endDate: '2024-03-18',
    status: 'Pending',
    reason: 'Family vacation',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Request Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>ID:</Text>
        <Text style={styles.detail}>{requestDetails.id}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Type:</Text>
        <Text style={styles.detail}>{requestDetails.leaveType}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Start Date:</Text>
        <Text style={styles.detail}>{requestDetails.startDate}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>End Date:</Text>
        <Text style={styles.detail}>{requestDetails.endDate}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Status:</Text>
        <Text style={styles.detail}>{requestDetails.status}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Reason:</Text>
        <Text style={styles.detail}>{requestDetails.reason}</Text>
      </View>
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
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detail: {
    fontSize: 16,
  },
});

export default LeaveRequestDetailsScreen;
