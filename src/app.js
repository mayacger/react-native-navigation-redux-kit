import React, { Component } from 'react';
import { Provider } from 'react-redux';
import getStore from "./store";

import {
  View,
  Text,
} from 'react-native';

import AppNavigation from './AppNavigation'

class App extends Component {

  store = getStore();

  render () {
    return (
      <Provider store={this.store}>
        <AppNavigation />
      </Provider>
    )
  }
}

export default App;
