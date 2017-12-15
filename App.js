import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootTabs from './RootTabs'

export default class App extends React.Component {
  render() {
    return (
      <RootTabs />
    );
  }
}
