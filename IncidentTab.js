import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import ButtonBasics from './ButtonBasics'

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
        <Text>Incident Screen</Text>
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
