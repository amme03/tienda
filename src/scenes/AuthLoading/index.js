import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import httpUsers from '../services/Users/http-user';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.validateToken();
  }

  validateToken = async () => {
    try {
      const token = await AsyncStorage.getItem( 'token' );
      const data = null;
      //token = token+'s';
      if( token ){
        data = await httpUsers.getUserByToken( token );
      }
      setTimeout( () => {
        this.props.navigation.navigate( data ? 'App' : 'Auth', { user : data } );
      }, 2000 );
    } catch(err){
      this.setState( { msg: err.message } ); 
      setTimeout( () => {
        this.props.navigation.navigate( 'Auth' );
      }, 2000 );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.msg}</Text>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AuthLoading;
