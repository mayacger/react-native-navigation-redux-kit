import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Main from '../Containers/Main';

// export Main;

const Routes = {
  Main: {
      screen: Main,
      navigationOptions: {
        title: 'Github Notetaker',
        header: null,
        // tabBarVisible: false,
      }
  },
};


export default Routes;
