import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Profile Screen</Text>
    <Text>Name: Chris</Text>
    <Text>Email: Chris@email.com</Text>
    <Text>Grade: 7</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    width: 50,
    height: 50,
  },
});

export default ProfileScreen;
