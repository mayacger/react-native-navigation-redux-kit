import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabNavigator, DrawerItems} from 'react-navigation';

import { ScrollView, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';



import NavTab from "../TabNavigator";
/**
 * drawer ... more info https://goo.gl/2Dnmtl
 */
const customDrawerComponent = (props) =>
  <ScrollView
    style={{
      flex           : 1,
      backgroundColor: "#000",
    }}>
    <DrawerItems {...props} />
  </ScrollView>;



const NavStack = () =>{
  return (
    <View><Text>home</Text></View>
  )
}
const SettingsScreen = () =>{
  return (
    <View><Text>SettingsScreen</Text></View>
  )
}

/**
 * more info on why this variable name must begin with CAPITAL letters due to JSX syntax
 * https://goo.gl/nGRaAl
 */
const NavDrawer = DrawerNavigator(
  // route config
  {
    HomeRoute    : {
      screen           : NavTab,
      navigationOptions: {
        drawerLabel: 'home',
        drawerIcon : ({tintColor}) => <Icon name="wb-sunny" color={tintColor}/>,
      },
    },
    SettingsRoute: {
      screen           : SettingsScreen,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon : ({tintColor}) => <Icon name="settings" color={tintColor}/>,
      },
    },
  },
  // navigator config
  {
    contentComponent: customDrawerComponent,
    drawerPosition  : 'left',
    // styling for for DrawerView.Items in contentOptions
    // contentOptions  : css.drawer,
  },
);

export default NavDrawer;
