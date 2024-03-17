import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import LogoutButton from '../components/LogoutButton';

const StaffProfileScreen = ({ navigation }) => {
  const [profilePicture, setProfilePicture] = useState(null)
  const [staffInfo, setStaffInfo] = useState({
    name: '',
    email: '',
    position: '',
    Subjects: '',
    contactNumber: '',
  });

  const fetchStaffInfo = () => {
    
    setStaffInfo({
      name: 'Bashir Muhammad',
      email: 'muhammadbashir@gmail.com',
      position: 'Vice-Principal',
      subjects: 'Arabic, Nahwu and Hadith',
      contactNumber: '081 56848384',
    });

    setProfilePicture('https://csn-prod-profile-images.s3.amazonaws.com/ZcP4ZzB_br7KGkIYA7HBS')
  };

  useEffect(() => {
    fetchStaffInfo();
  }, []);

  const handleProfileUpdate = () => {

  };

  handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      <Text style={styles.heading}>Sayyid Bashir</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{staffInfo.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{staffInfo.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Position:</Text>
        <Text style={styles.text}>{staffInfo.position}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Subjects:</Text>
        <Text style={styles.text}>{staffInfo.subjects}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Contact Number:</Text>
        <Text style={styles.text}>{staffInfo.contactNumber}</Text>
      </View>
      
      <Button title="Edit Profile" onPress={handleProfileUpdate} />
      <LogoutButton onPress={handleLogout} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontFamily: 'Lato-Bold',
    marginRight: 10,
    width: 100,
  },
  text: {
    flex: 1,
    fontFamily: 'Lato-Regular'

  },
});

export default StaffProfileScreen;
