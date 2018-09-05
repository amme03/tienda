

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button,Image,
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
import Catalogo from './src/scenes/Catalogo';


const AppNavigator = createStackNavigator({
  CatalogoScreen: {
    screen: Catalogo
  },

},
  {
    initialRouteName: 'CatalogoScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F5A9A9',
        borderBottomColor: '#4527A0'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 18,
      }
    }
  }

);



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <AppNavigator />
      
    );
  }
}


