import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bananas from './Bananas'
import PizzaTranslator from './PizzaTranslator'
import ButtonBasics from './ButtonBasics'
import Movies from './Movies'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.bigblue}>Shake your phone to open the developer menu.</Text>
          <Bananas />
          <PizzaTranslator />
          <ButtonBasics />
          <Movies />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
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
