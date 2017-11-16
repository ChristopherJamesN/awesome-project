import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Home Screen</Text>
    <Button title="Sign In" onPress={() => Alert.alert('You are now signed in.')}/>
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

export default HomeScreen;
