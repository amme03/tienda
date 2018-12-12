import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import{connect} from 'react-redux'
import { withNavigation } from 'react-navigation';

const ShoppingCardIcon = (props) => (
        <View style={styles.container}>
            <View style={styles.badget}>
                <Text style={styles.badgetText}>{props.cartItems.length}</Text>
            </View>
            <Icon onPress={() =>  props.navigation.navigate('CarritoScreen') } name="shopping-cart" size={50} /> 
        </View>
    );


const styles = StyleSheet.create({
    container: {
        padding: 5,

    },
    badget: {
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        right: 15,
        bottom: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    badgetText: {
        color: '#ffff',
        fontWeight: 'normal',
    }
});
const mapStateToProps=(state)=>{
  return{
      cartItems:state
  }
}
export  default connect(mapStateToProps, null) (withNavigation(ShoppingCardIcon));