import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Button,
    Text,
    TextInput
} from 'react-native';


import Api from './../../../utils/api'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);




class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: {},
            iva: {},
            cantidad: {},

        }
    }

    //Ciclo de vida del componente
    async componentDidMount() {
        const data = await Api.getArticleAwaitDetallle(this.props.navigation.getParam('id', ''));
        console.log(data);
        this.setState({ carrito: data, iva: 0.16, cantidad: 1, })

    }

    static navigationOptions = {
        title: 'Confirmacion de compra',
        headerTitleStyle: {
            fontSize: 26,
        }
    }



    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageLogoView}>
                    <Image
                        style={styles.imageLogo}
                        source={{ uri: 'https://www.vectorizados.com/muestras/2015/04/perfil-de-mujer-en-3d.gif' }}></Image>

                </View>
                <View style={styles.formWrapper}>

                    <Text style={styles.formLabel}> Nombre </Text>
                    <Text style={styles.formInput}> Ana Maria Marrugo Escobar </Text>
                    <Text style={styles.formLabel}> Telefono </Text>
                    <TextInput
                        placeholder="Telefono de usuario es..."
                        style={styles.formInput}
                        
                    />
                    <Text style={styles.formLabel}> Tarjeta de Credito </Text>
                    <Text style={styles.formInput}>42444*** </Text>
                    <Text style={styles.formLabel}> Direccion de envio </Text>
                    <TextInput
                        placeholder="Direccion usuario"
                        style={styles.formInput}
                    />
                    <Text style={styles.formLabel}> Valor total compra </Text>
                    <Text style={styles.formInput}>$ {this.state.carrito.price*this.state.iva*this.state.cantidad*1+this.state.carrito.price*this.state.cantidad*1}</Text>
           
                </View>

                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('MercadoScreen', { id: this.state.carrito._id }) }}
                            title="Finalizar compra"
                            loading
                            loadingProps={{ size: "small", color: "#F5A9A9" }}
                            titleStyle={{ fontWeight: "700" }}
                            buttonStyle={{
                                backgroundColor: "#F5A9A9",
                                width: 200,
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    };
}


const styles = StyleSheet.create({
    container: {
       
        marginLeft: 2,
        marginRight: 2
    },

    imageBarnner: {
        width: 400,
        height: 250,
        alignItems: 'center',
    },

    imageBarnner2: {
        width: 300,
        height: 250
    },

    imageLogoView: {
        width: 400,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 50,
    },


    header: {
        fontSize: 18,
        backgroundColor: '#F5A9A9',
        borderBottomColor: '#D8D8D8',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        color: '#F8EFFB',
    },
    formWrapper: {
        paddingLeft: 10,
        marginVertical: 15,
    },
    formLabel: {
        color: '#F5A9A9',
        
    },
    formInput: {
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});




export default Formulario;