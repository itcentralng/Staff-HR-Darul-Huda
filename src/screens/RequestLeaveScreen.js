import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const RequestLeaveScreen = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState(null); 
  const handleRequestLeave = () => {
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>Request Leave</Text>
      <TextInput
        style={styles.input}
        placeholder="Leave Type"
        value={leaveType}
        onChangeText={setLeaveType}
      />
      <TextInput
        style={styles.input}
        placeholder="Start Date"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date"
        value={endDate}
        onChangeText={setEndDate}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Reason"
        value={reason}
        onChangeText={setReason}
        multiline={true}
      />
      <Button title="Attach File" onPress={() => {}} />
      <Button title="Submit Request" onPress={handleRequestLeave} style={styles.attach} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: "top" 
  },
  attach: {
    marginTop: 20
  }
});

export default RequestLeaveScreen;
