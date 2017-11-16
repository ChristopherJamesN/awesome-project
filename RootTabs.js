import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonBasics from './ButtonBasics'
import IncidentTab from './IncidentTab'
import SubmittedIncidentsScreen from './SubmittedIncidentsScreen'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Home Screen</Text>
    <Button title="Sign In" onPress={() => Alert.alert('You are now signed in.')}/>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Profile Screen</Text>
    <Text>Name: Chris</Text>
    <Text>Email: Chris@email.com</Text>
    <Text>Grade: 7</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Incident: {
    screen: IncidentTab,
    navigationOptions: {
      tabBarLabel: 'Report',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  SubmittedIncidents: {
    screen: SubmittedIncidentsScreen,
    navigationOptions: {
      tabBarLabel: 'Submitted',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default RootTabs;

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
