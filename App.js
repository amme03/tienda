import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button, Image,
} from 'react-native';
import SwitchNavigator from './src/scenes/Navigation/navigation';



import RNLanguajes from 'react-native-languages';
import i18n from './src/scenes/i18n';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    RNLanguajes.addEventListener('change', this.onChangeLanguaje);
  }

  componentWillMount() {
    RNLanguajes.addEventListener('change', this.onChangeLanguaje);
  }
  onChangeLanguaje = ({ language }) => {
    i18n.locale = language;
  }

  render() {
    return (
      <SwitchNavigator />

    );
  }
}

