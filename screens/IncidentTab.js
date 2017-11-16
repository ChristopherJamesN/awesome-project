import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import ButtonBasics from '../ButtonBasics'
import { FormLabel, FormInput, FormValidationMessage, Form } from 'react-native-elements'



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
        <Text style={styles.bigblue}>Incident Screen</Text>
          <FormLabel>Description</FormLabel>
          <FormInput ref={input => this.input = input}/>
          <FormLabel>Location</FormLabel>
          <FormInput ref={input => this.input = input}/>
          <FormLabel>Injuries</FormLabel>
          <FormInput ref={input => this.input = input}/>
      </View>
    );
  }
}

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
