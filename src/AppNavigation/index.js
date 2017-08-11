import React, { Component } from 'react';
import {connect } from "react-redux";
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import Routes from "./routes";

import Main from '../Containers/Main';

import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';


import NavDrawer from "./Drawer";

// export const AppNavigator = StackNavigator(Routes
//   // , {
//   //   navigationOptions: {
//   //       title: ({ state }) => {
//   //           if (state.params) {
//   //               return `${state.params.title}`;
//   //           }
//   //       }
//   //   }
//   //}
// );




// export const AppNavigator = StackNavigator(
//   {
//     ...Routes,
//     Index: {
//       screen: Main,
//       navigationOptions: {
//         title: "home"
//       }
//     },
//   },
//   {
//     initialRouteName: 'Index',
//     headerMode: 'none',
//
//     /*
//    * Use modal on iOS because the card mode comes from the right,
//    * which conflicts with the drawer example gesture
//    */
//     mode: Platform.OS === 'ios' ? 'modal' : 'card',
//   }
// );
export const AppNavigator = NavDrawer;

const AppWithNavigationState = ({ dispatch, nav }) => (
  <NavDrawer navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default  connect(mapStateToProps)(AppWithNavigationState);
