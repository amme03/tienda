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




class Success extends Component {
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
                        source={{ uri: 'https://previews.123rf.com/images/karakotsya/karakotsya1710/karakotsya171000074/87529649-thank-you-for-shopping-hand-lettering-modern-brush-calligraphy-black-ink-typography-vector-illustrat.jpg' }}></Image>

                </View>


                <View style={styles.imageBarnner} >
                    <Text style={styles.formInputLabel}>Su compra por ${this.state.carrito.price * this.state.iva * this.state.cantidad * 1 + this.state.carrito.price * this.state.cantidad * 1} fue exitosa.</Text>
                    <Text style={styles.formInput}>Si los productos del pedido están disponibles los pedidos serán enviados en un plazo máximo de veinticuatro (24) horas después de la recepción del comprobante de pago.</Text>
                    <Text style={styles.formInput}>Para cambios, devoluciones, quejas y reclamos llamar a la linea nacional 0180007345999.</Text>
                    <Text style={styles.formInput}></Text>

                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('MercadoScreen') }}
                            title="Seguir comprando"
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
        height: 200,
        alignItems: 'center',
    },
    imageLogo: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 75,
    },

    formInput: {
        paddingLeft: 10,
        color: '#F5A9A9',
        marginTop: 20,
        textAlignVertical:'auto'

    },
    formInputLabel: {
        paddingLeft: 10,
        color: '#F5A9A9',
        marginTop: 20,
        textAlignVertical:'auto',
        fontSize: 20,
       
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

});




export default Success;