import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';
import ButtonBasics from './ButtonBasics'

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
        <Text style={styles.bigblue}>Submitted Incidents Screen</Text>
        <Text style={{height: 40}} placeholder="Description">{this.state.Description}</Text>
        <Text style={{height: 40}} placeholder="Location">{this.state.Location}</Text>
        <Text style={{height: 40}} placeholder="Injuries">{this.state.Injuries}</Text>
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
    alignItems: 'center',
  },
  red: {
    color: 'red',
    width: 50,
    height: 50,
  },
});
