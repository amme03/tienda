

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text, Button,Image,
} from 'react-native';


import { createStackNavigator } from 'react-navigation';
import Catalogo from './src/scenes/Catalogo';
import Mercado from './src/scenes/Mercado';
import Detalle from './src/scenes/Detalle';
import Carrito from './src/scenes/Carrito';
import Formulario from './src/scenes/Formulario';
import Success from './src/scenes/Success';

const AppNavigator = createStackNavigator({
  CatalogoScreen: {
    screen: Catalogo
  },
  MercadoScreen: {
    screen: Mercado
  },
  
  DetalleScreen: {
    screen: Detalle
  },
    
  CarritoScreen: {
    screen: Carrito
  },
  FormularioScreen: {
    screen: Formulario
  },
  SuccessScreen: {
    screen: Success
  },
},
  {
    initialRouteName: 'MercadoScreen',
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


