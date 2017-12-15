import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements'

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text h1>Profile Screen</Text>
    <Text h4>Name: Chris</Text>
    <Text h4>Email: Chris@email.com</Text>
    <Text h4>Grade: 7</Text>
  </View>
);

export default ProfileScreen;
