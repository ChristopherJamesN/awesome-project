import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';
import ButtonBasics from '../ButtonBasics'

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
          <TextInput style={{height: 40}}
          placeholder="Description"
          onChangeText={(text) => this.setState({Description:text})}
          ></TextInput>
          <TextInput style={{height: 40}}
           placeholder="Location"
           onChangeText={(text) => this.setState({Location:text})}
           ></TextInput>
          <TextInput style={{height: 40}}
          placeholder="Injuries"
          onChangeText={(text) => this.setState({Injuries:text})}
          ></TextInput>
        <ButtonBasics />
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
