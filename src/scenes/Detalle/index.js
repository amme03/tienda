import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Text } from 'react-native';
import styles from './components/styles/style-detalle';
import { YellowBox } from 'react-native';
import HttpProducts from '../../scenes/services/Products/http-products';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { connect } from 'react-redux';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: {},
            contador: 0,
            isDisabled: this.props.cartItems.length <= 1,
        }
    }
    //Ciclo de vida del componente
    async componentDidMount() {
        /* const data = await Api.getArticleAwaitDetallle(this.props.navigation.getParam('id', ''));
        // console.log(data);                 //con api externa
         //this.setState({ detalle: data, })*/
        this.getProductsById()
    }
    //Consulta del producto desde el cliente
    async getProductsById() {
        const data = await HttpProducts.getProductsById(this.props.navigation.getParam('id', ''));
        //console.log(data);
        this.setState({ detalle: data, })
    }
    //Menu
    static navigationOptions = {
        title: 'Mercado',
        headerTitleStyle: {
            fontSize: 26,
        }
    }
    //Funciones para agregar o reducir la cantidad de articulos que se van a comprar
    incrementar() {
        var incremento = this.state.contador === 20 ? 20 : this.state.contador + 1;
        var data = {
            _id: '',
            image: '',
            avatar: '',
            description: '',
            name: '',
            price: 0
        };
        data._id = this.state.detalle.name + incremento;
        data.image = this.state.detalle.image;
        data.avatar = this.state.detalle.avatar;
        data.description = this.state.detalle.description;
        data.name = this.state.detalle.name;
        data.price = this.state.detalle.price;
        this.setState({
            contador: incremento,
            isDisabled: false,
        });

        console.log('Adjuntar-->' + data._id);
        if (this.state.contador !== 20) { this.props.addItemToCart(data); }

    }
    decrementar() {

        var decremento = this.state.contador === 0 ? 0 : this.state.contador;
        var data = {
            _id: '',
            image: '',
            avatar: '',
            description: '',
            name: '',
            price: 0
        };

        data._id = this.state.detalle.name + decremento;
        data.image = this.state.detalle.image;
        data.avatar = this.state.detalle.avatar;
        data.description = this.state.detalle.description;
        data.name = this.state.detalle.name;
        data.price = this.state.detalle.price;



        this.setState({
            contador: this.state.contador === 0 ? 0 : this.state.contador - 1,
            isDisabled: this.props.cartItems.length <= 1,


        });

        if (this.state.contador !== 0) {
            console.log('Borrar-->' + data._id);
            this.props.removeItem(data);
        }

    }
    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.imageBarnner}>
                    <Image
                        style={styles.imageBarnner2}
                        source={{ uri: this.state.detalle.image }}>
                    </Image>
                </View>
                <View  >
                    <Text style={styles.header}>{this.state.detalle.name} </Text>
                </View>
                <View style={styles.description} >
                    <View style={styles.imageLogoView}>
                        <Image
                            style={styles.imageLogoView}
                            source={{ uri: this.state.detalle.avatar }}>
                        </Image>
                    </View>
                    <View style={styles.descriptionText}>
                        <Text style={styles.descriptionName}>Descripción </Text>
                        <Text style={styles.descriptionName}>Cantidad:   </Text>
                        <Text style={styles.descriptionName}>Precio unitario:     </Text>
                        <Text style={styles.descriptionName}>Total: </Text>

                    </View>
                    <View style={styles.descriptionText}>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.description}</Text>
                        <View style={styles.contenedor}>
                            <Text style={styles.descriptionBotones}>{this.state.contador} </Text>
                            <View style={styles.contenedorBotones}>
                                <Button color={'#F5A9A9'} onPress={this.incrementar.bind(this)} title="+"></Button>
                                <View style={styles.espacio}></View>
                                <Button color={'#F5A9A9'} onPress={this.decrementar.bind(this)} title="-"></Button>
                            </View>
                        </View>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.price}</Text>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.price * this.state.contador}</Text>

                    </View>
                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('CarritoScreen', { id: this.state.detalle._id, cant: this.state.contador }) }}
                            title="Ir al carrito de compras"
                            loading
                            loadingProps={{ size: "small", color: "#F5A9A9" }}
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20 }}
                            disabled={this.state.isDisabled}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (data) => {
            dispatch({ type: 'ADD_TO_CARD', payload: data })
        },
        removeItem: (data) => dispatch({ type: 'REMOVE_FROM_CART', payload: data })
    }
}

const mapStateToProps=(state)=>{
    return{
        cartItems:state
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Detalle);