import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5 icon

const RequestLeaveScreen = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState(null); 

  const handleRequestLeave = () => {
    // Handle leave request
  };

  return (
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
      <Button
        title="Attach File"
        onPress={() => {}}
        icon={<FontAwesome5 name="paperclip" size={20} color="black" />} // Attach icon
        buttonStyle={styles.attachButton} // Apply button style
      />
      <Button
        title="Submit Request"
        onPress={handleRequestLeave}
        style={styles.attach}
      />
    </View>
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
    fontFamily: 'Lato-Bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlignVertical: "top" ,
    borderRadius: 8,
    fontFamily: 'Lato-Regular',
  },
  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontFamily: 'Lato-Regular',
  },
});

export default RequestLeaveScreen;
