/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from './src/app';

export default class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}


AppRegistry.registerComponent('App', () => App);
