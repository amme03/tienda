import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator,createSwitchNavigator } from 'react-navigation';
//import Icon from 'react-native-vector-icons/FontAwesome';
import SideMenu from './side-menu'

//stack
import Catalogo from '../Catalogo';
import Mercado from '../Mercado';
import Detalle from '../Detalle';
import Carrito from '../Carrito';
import Formulario from '../Formulario';
import Success from '../Success';


//auth
import Auth from './../Auth';
import AuthLoading from './../AuthLoading';


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

//const iconCatalogo = (<Icon name="shopping-basket" size={24} color='#999' />);
//const iconMercado = (<Icon name="shopping-bag" size={24} color='#999' />);
//const iconFormulario = (<Icon name="user-circle" size={24} color='#999' />);

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

const Drawer = createDrawerNavigator(
    {
        Mercado: { screen: AppNavigator },
        Hogar: { screen: Tabs },
    }, { drawerWidht: 300,
        contentComponent: SideMenu,
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

    });

    export default SwitchNavigator = createSwitchNavigator({
        Auth: Auth,
        AuthLoading: AuthLoading,
        App: Drawer
      },{
        initialRouteName: 'AuthLoading'
      })