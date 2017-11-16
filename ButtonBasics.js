import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { Navigation } from 'react-navigation';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('Incident Submitted')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Submit Incident"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 0.5,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
