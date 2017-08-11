import React, {Component} from 'react';
import { Text, View, Platform} from 'react-native';
import {
  DrawerItems,
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import {Icon} from 'react-native-elements';

import routes from '../routes';
/**
 * This is where the navigation hierarchy for the app is setup using DrawerNavigator,
 * StackNavigator, and TabNavigator.
 *
 * The Redux store is also wired into the Provider, which sits at the root of the view
 * hierarchy.
 */

//
// TABS
//st
//
import DetailsScreen1 from '../../Containers/DetailsScreen1';
const DetailsScreen2 = ({navigation}) => {
  return (
    <View><Text>{navigation.state.routeName}</Text></View>
  )
}


const Tabs = TabNavigator(
  // route config
  {

    DetailsRoute1: {
      screen: DetailsScreen1,
      navigationOptions: {
        // title: "home",
        tabBarIcon: ({tintColor}) => <Icon name="wb-sunny" color={tintColor}/>,
      }
    },
    DetailsRoute2: {
      screen: DetailsScreen2,
      navigationOptions: {
        title: "settings",
        tabBarIcon: ({tintColor}) => <Icon name="settings" color={tintColor}/>,
      }
    },
  },
  // navigator config
  {
    // lazyLoad      : false, // render the tabs lazily
    tabBarPosition: 'bottom', // where are the tabs shown
    backBehavior  : 'none', // back button doesn't take you to the initial tab
    // tabBarOptions : css.tabs,
  },
);

const NavTab = StackNavigator(
  {
    ...routes,
    Index: {
      screen: Tabs,
    },
    DetailsRoute3: {
      screen: DetailsScreen2,
      navigationOptions: {
        title: "DetailsRoute3",
        tabBarIcon: ({tintColor}) => <Icon name="settings" color={tintColor}/>,
      }
    },
  },
  {
    // initialRouteName: 'Index',
    // headerMode: 'none',
    navigationOptions: {
      headerBackTitle: null,
    },

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default NavTab;
