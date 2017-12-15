import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text h3>Home Screen</Text>
    <Button large title="Sign In" onPress={() => Alert.alert('You are now signed in.')}/>
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
