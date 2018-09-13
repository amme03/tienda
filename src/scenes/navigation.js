import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, } from 'react-navigation';
//stack
import Catalogo from './Catalogo';
import Mercado from './Mercado';
import Detalle from './Detalle';
import Carrito from './Carrito';
import Formulario from './Formulario';
import Success from './Success';

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
            },
             
        }
    }

);

const Tabs = createMaterialTopTabNavigator({
    Tab1: { screen: Catalogo },
    Tab2: { screen: Mercado },
},
    {
        order: ['Tab1', 'Tab2'],

        swipeEnabled: true,
        tabBarOptions: {
            labelStyle: {
                fontWeight: '500',
                fontSize: 18,
            },
            tabStyle: {
                width: 200,
            },
            inactiveTintColor: '#666',
            style: {
                backgroundColor: '#F5A9A9',
                borderBottomColor: '#4527A0'
            },

        }
    },

);


export const Drawer = createDrawerNavigator({
    Mercado: { screen: AppNavigator },
    Hogar: { screen: Tabs },},{
        contentOptions: {
        activeTintColor: 'blue',
        itemsContainerStyle: {
          marginVertical: 1,
          
        },
        iconContainerStyle: {
          opacity: 10,
          backgroundColor: '#F5A9A9',
          borderBottomColor: '#4527A0'
        },
        
        
      }

})