

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button,Image,
} from 'react-native';



import {Drawer} from './src/scenes/navigation';



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <Drawer/>
      
    );
  }
}


