import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Text, } from 'react-native';
import styles from './components/styles/styles-success';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { connect } from 'react-redux';
class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        }
    }
    //Ciclo de vida del componente
    async componentDidMount() {
        this.actualizar();
    }

    actualizar() {
        var totalVenta = 0;
        this.props.cartItems.forEach(element => {

            totalVenta = totalVenta + element.price;
            this.props.removeItem(element);

        });
        this.setState({
            total: totalVenta,
        });
    }
    static navigationOptions = {
        title: 'Confirmación',
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
                    <Text style={styles.formInputLabel}>Su compra por ${this.state.total} fue exitosa.</Text>
                    <Text style={styles.formInput}>Si los productos del pedido están disponibles los pedidos serán enviados en un plazo máximo de veinticuatro (24) horas después de la recepción del comprobante de pago.</Text>
                    <Text style={styles.formInput}>Para cambios, devoluciones, quejas y reclamos llamar a la linea nacional 0180007345999.</Text>
                    <Text style={styles.formInput}></Text>

                </View>
                <View style={styles.contenedorBotones}>
                    <View style={styles.buttonStyle}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('MercadoScreen') }}
                            title="Seguir comprando mercado"
                            loading
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20 }}

                        />
                    </View>
                    <View style={styles.espacio}></View>
                    <View style={styles.buttonStyle}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('CatalogoScreen') }}
                            title="Seguir comprando hogar"
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
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (data) => dispatch({ type: 'REMOVE_FROM_CART', payload: data })
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Success);