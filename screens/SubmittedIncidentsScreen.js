import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet } from 'react-native';
import ButtonBasics from '../ButtonBasics'
import { Button, Text } from 'react-native-elements'

export default class SubmittedIncidentsScreen extends Component {
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
        <Text h4>Submitted Incidents Screen</Text>
        <Text style={{height: 40}} placeholder="Description">{this.state.Description}</Text>
        <Text style={{height: 40}} placeholder="Location">{this.state.Location}</Text>
        <Text style={{height: 40}} placeholder="Injuries">{this.state.Injuries}</Text>
      </View>
    );
  }
}
