import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Form, Button, Text } from 'react-native-elements'

export default class IncidentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Description: '',
      Location: '',
      Injuries: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h2>Incident Screen</Text>
          <FormLabel>Description</FormLabel>
          <FormInput ref={input => this.input = input}/>
          <FormLabel>Location</FormLabel>
          <FormInput ref={input => this.input = input}/>
          <FormLabel>Injuries</FormLabel>
          <FormInput ref={input => this.input = input}/>
          <Button
          raised
          title='Submit' onPress={() => Alert.alert('Incident has been submitted.')}/>
      </View>
    );
  }
}
