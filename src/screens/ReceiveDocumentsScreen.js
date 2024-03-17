
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ReceiveDocumentsScreen = () => {

  const receivedDocuments = [
    { id: 1, title: 'Document 1', sender: 'Office A', date: '2024-03-13' },
    { id: 2, title: 'Document 2', sender: 'Office B', date: '2024-03-12' },
    { id: 3, title: 'Document 3', sender: 'Office C', date: '2024-03-11' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Received Documents</Text>

      {receivedDocuments.map((doc) => (
        <TouchableOpacity key={doc.id} style={styles.documentItem}>
          <Text style={styles.documentTitle}>{doc.title}</Text>
          <Text style={styles.documentSender}>{doc.sender}</Text>
          <Text style={styles.documentDate}>{doc.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    marginBottom: 20,
  },
  documentItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  documentTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    marginBottom: 5,
  },
  documentSender: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Lato-Regular',
    marginBottom: 3,
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Lato-Regular'

  },
});

export default ReceiveDocumentsScreen;
