import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Text, } from 'react-native';
import styles from './components/styles/styles-success';
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
        const cant = this.props.navigation.getParam('cant', '');
        this.setState({ carrito: data, cantidad: cant * 1, })
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
                    <Text style={styles.formInputLabel}>Su compra por ${this.state.carrito.price * this.state.cantidad} fue exitosa.</Text>
                    <Text style={styles.formInput}>Si los productos del pedido están disponibles los pedidos serán enviados en un plazo máximo de veinticuatro (24) horas después de la recepción del comprobante de pago.</Text>
                    <Text style={styles.formInput}>Para cambios, devoluciones, quejas y reclamos llamar a la linea nacional 0180007345999.</Text>
                    <Text style={styles.formInput}></Text>

                </View>
                <View style={styles.contenedorBotones}>
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('MercadoScreen') }}
                            title="Seguir comprando mercado"
                            loading
                            titleStyle={{ fontWeight: "700" }}
                            buttonStyle={styles.buttonStyle}
                            containerStyle={{ marginTop: 20 }}
                        />
                        <View style={styles.espacio}></View>
                        <View style={styles.descriptionButton}>
                            <Button
                                color={'#F5A9A9'}
                                onPress={() => { this.props.navigation.navigate('CatalogoScreen') }}
                                title="Seguir comprando hogar"
                                loading
                                titleStyle={{ fontWeight: "700" }}
                                buttonStyle={styles.buttonStyle}
                                containerStyle={{ marginTop: 20 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    };
}

export default Success;