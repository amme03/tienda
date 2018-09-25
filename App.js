import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button,Image,
} from 'react-native';
import SwitchNavigator from './src/scenes/Navigation/navigation';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SwitchNavigator/>
      
    );
  }
}

