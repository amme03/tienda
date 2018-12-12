import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';
import httpUsers from '../services/Users/http-user';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login : 'lpalacio@gmail.com',
      password : '567890',
      message: ''
    };
  }

  login = async () => {
    try {
      const data = await httpUsers.auth( this.state.login, this.state.password );
      if( data ){
        console.log( data );
        this.setState( { token: data.token } ); 
        console.log( data.token );
        await AsyncStorage.setItem( 'token', data.token );
        this.props.navigation.navigate( 'App', { user : data } );
      }
      else {
        this.setState( { msg: `${this.state.login} data es null` } );   
      }
    } catch(err){
      this.setState( { msg: err.message } ); 
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.msg}</Text>
        <TextInput 
          underlineColorAndroid={'transparent'}
          style={styles.formInput}
          placeholder='Usuario'
          value={ this.state.login }
          onChangeText={ text => this.setState({ login: text }) }
        />     
        <TextInput 
          underlineColorAndroid={'transparent'}
          style={styles.formInput}
          placeholder='Clave'
          value={ this.state.password }
          onChangeText={ text => this.setState({ password: text }) }
          secureTextEntry={true}
        />     
        <Button
            title='login'
            onPress={ this.login }
       
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#ccc',
        marginBottom: 10,
        width: 250,
    }
});

export default Auth;
