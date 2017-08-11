import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import { connect } from 'react-redux';

import {Icon, Button} from 'react-native-elements';

import * as css from '../Styles';

const Left = ({navigation}) => {
  return <Icon name="menu" iconStyle={{width:44,textAlign: 'center'}}  underlayColor={'rgba(0,0,0,0)'} onPress={() => navigation.navigate('DrawerOpen')}/>;
}

export default class DetailsScreen1 extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Home`,
    // headerTitle:<Icon name="wb-sunny" />,
    headerLeft: <Left navigation={navigation}/>,
  });

  constructor(props) {
    super(props);
  }

  // renderRow({item}) {
  //
  //   let {key, time, icon, temp} = item;
  //
  //   const {iconName, iconFont, iconColor} = icon;
  //
  //   temp = css.addDegreesToEnd(temp);
  //
  //   return (
  //     <View style={css.details_screen_1.list_row}>
  //       <Text style={css.details_screen_1.list_row_time}>{time}</Text>
  //       <Icon color={iconColor} size={css.values.tiny_icon_size} name={iconName}
  //             type={iconFont}/>
  //       <Text style={css.details_screen_1.list_row_temp}>{temp}</Text>
  //     </View>
  //   );
  // }

  render() {

    // const {description, currentTemp, icon, key, place, time, dailyForecast} =
    //         this.props.navigation.state.params;
    //
    // const {iconName, iconFont, iconColor} = icon;
    //
    // const temp = css.addDegreesToEnd(currentTemp);

    return (
      <View style={css.details_screen_1.v_container}>
        <Text style={css.details_screen_1.place}>place</Text>
        <Text style={css.details_screen_1.description}>description</Text>
        <Text style={css.details_screen_1.current_temp}>temp</Text>
        <View style={css.details_screen_1.separator}/>
          <Button
          icon={{name: 'cached'}}
          backgroundColor='green'
          borderRadius={10}
          title='next screen'
          onPress={()=> {
            this.props.navigation.dispatch({type: 'goToDetailsRoute3'})
          }}
          />
      </View>
    );

  }

}
