import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonBasics from './ButtonBasics'
import IncidentTab from './IncidentTab'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Home Screen</Text>
    <Button title="Sign In" />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Profile Screen</Text>
    <Text>Name: </Text>
    <Text>Email: </Text>
    <Text>Grade: </Text>
  </View>
);

const IncidentScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Incident Screen</Text>
    <TextInput style={{height: 40}} placeholder="Description"></TextInput>
    <TextInput style={{height: 40}} placeholder="Location"></TextInput>
    <TextInput style={{height: 40}} placeholder="Injuries"></TextInput>
    <ButtonBasics />
  </View>
);

const SubmittedIncidentsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.bigblue}>Submitted Incidents Screen</Text>
    <Text style={{height: 40}} placeholder="Description"></Text>
    <Text style={{height: 40}} placeholder="Location"></Text>
    <Text style={{height: 40}} placeholder="Injuries"></Text>
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
  },
  red: {
    color: 'red',
    width: 50,
    height: 50,
  },
});
