import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const UploadDocumentScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOffice, setSelectedOffice] = useState(null);

  const offices = [
    { label: 'Office A', value: 'office_a' },
    { label: 'Office B', value: 'office_b' },
    { label: 'Office C', value: 'office_c' },
  ];

  const handleUpload = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected Office:', selectedOffice);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Document</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedOffice(value)}
        items={offices}
        placeholder={{ label: 'Choose Office', value: null }}
        style={{
          inputIOS: styles.dropdown,
          inputAndroid: styles.dropdown,
        }}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: 'Lato-Regular'

  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  uploadButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontFamily: 'Lato-Bold'
  },
});

export default UploadDocumentScreen;
