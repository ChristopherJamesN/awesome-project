import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bananas from './Bananas'
import PizzaTranslator from './PizzaTranslator'
import ButtonBasics from './ButtonBasics'
import Movies from './Movies'
import {
  StackNavigator,
} from 'react-navigation';
import RootNavigator from './RootNavigator'
import RootTabs from './RootTabs'

export default class App extends React.Component {
  render() {
    return (
      <RootTabs />
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
