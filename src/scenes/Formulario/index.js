import React, { Component } from 'react';
import {  View, ScrollView,Image, Button,Text, TextInput } from 'react-native';
import Api from './../../../utils/api';
import styles from './components/styles/style-formulario';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: {},
            iva: {},
            cantidad: {},
            profit:{},
            

        }
    }
    //Ciclo de vida del componente
    async componentDidMount() {
        const data = await Api.getArticleAwaitDetallle(this.props.navigation.getParam('id', ''));
        const cant = this.props.navigation.getParam('cant', '');
       
        console.log(data);
        this.setState({ carrito: data, cantidad: cant*1, })
    }
    static navigationOptions = {
        title: 'Datos de compra',
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
                        source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}></Image>
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
                        placeholder="Direccion de entrega del producto"
                        style={styles.formInput}
                    />
                    <Text style={styles.formLabel}> Valor total compra </Text>
                    <Text style={styles.formInput}> {this.state.carrito.price * this.state.cantidad * 1}</Text>
                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('SuccessScreen', { id: this.state.carrito._id, cant:this.state.cantidad }) }}
                            title="Finalizar compra"
                            loading
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20 }}
                           
                        />
                    </View>
                </View>
            </ScrollView>
        );
    };
}

export default Formulario;