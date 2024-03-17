import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaveRequestsScreen = () => {
  const leaveRequests = [
    { id: 1, leaveType: 'Sick Leave', dates: '2024-03-15 to 2024-03-18', status: 'Pending', files: [] },
    { id: 2, leaveType: 'Vacation', dates: '2024-04-01 to 2024-04-05', status: 'Approved', files: ['file1.pdf', 'file2.jpg'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Requests</Text>
      {leaveRequests.map(request => (
        <View style={styles.requestContainer} key={request.id}>
          <Text style={styles.requestText}>Type: {request.leaveType}</Text>
          <Text style={styles.requestText}>Dates: {request.dates}</Text>
          <Text style={styles.requestText}>Status: {request.status}</Text>
          {request.files.length > 0 && (
            <View style={styles.filesContainer}>
              <Text style={styles.filesTitle}>Attached Files:</Text>
              {request.files.map(file => (
                <Text style={styles.filesText} key={file}>{file}</Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    marginBottom: 20,
  },
  requestContainer: {
    marginBottom: 20,
  },
  requestText: {
    fontSize: 16,
  },
  filesContainer: {
    marginTop: 10,
  },
  filesTitle: {
    fontWeight: 'bold',
  },
  filesText: {
    marginLeft: 10,
  },
});

export default LeaveRequestsScreen;
