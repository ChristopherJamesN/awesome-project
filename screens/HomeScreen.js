import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text h3>Home Screen</Text>
    <Button large title="Sign In" onPress={() => Alert.alert('You are now signed in.')}/>
  </View>
);

export default HomeScreen;
