import React, { Component } from 'react';
import { Header } from './react-native-elements'

const HomeHeader = () => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
);

export default HomeHeader;
