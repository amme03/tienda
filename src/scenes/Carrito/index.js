import React, { Component } from 'react';
import { View, ScrollView, StyleSheet,  Image, Button, Text } from 'react-native';
import Api from './../../../utils/api'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import styles from './components/styles/style-carrito';

class Carrito extends Component {
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
        const cant = this.props.navigation.getParam('cant', '');
        console.log(data);
        console.log(cant);
        this.setState({ carrito: data, iva:0.16, cantidad:cant*1, })
    }
    static navigationOptions = {
        title: 'Carrito',
        headerTitleStyle: {
            fontSize: 26,
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageLogoView}>
                    <Image
                        style={styles.imageLogoView}
                        source={{ uri: 'https://codigofuentenet.files.wordpress.com/2013/02/shoppingcartempty.jpg' }}></Image>
                </View>
                <View style={styles.description} >
                <View  >
                    <Text style={styles.header}>{this.state.carrito.name} </Text>
                </View>
                    <View style={styles.descriptionText}>
                        <Text style={styles.descriptionName}>Cantidad:   </Text>
                        <Text style={styles.descriptionName}>Valor:     </Text>
                        <Text style={styles.descriptionName}>Iva:     </Text>
                        <View style={styles.lineaRosa}></View>
                        <Text style={styles.descriptionName}>TOTAL:     </Text>
                    </View>
                    <View style={styles.descriptionText}>
                        <Text style={styles.descriptionLocation}>{this.state.cantidad*1}</Text>
                        <Text style={styles.descriptionLocation}>{(this.state.carrito.price/(1+this.state.iva)*this.state.cantidad*1).toFixed(2)}</Text>
                        <Text style={styles.descriptionLocation}>{(this.state.carrito.price/(1+this.state.iva)*this.state.iva*this.state.cantidad*1).toFixed(2)}</Text>
                        <View style={styles.linea}></View>
                        <Text style={styles.descriptionLocation}>{this.state.carrito.price*this.state.cantidad*1}</Text>
                    </View>
                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('FormularioScreen', { id: this.state.carrito._id, cant:this.state.cantidad }) }}
                            title="Ir a pagar"
                            loading
                            loadingProps={{ size: "small", color: "#F5A9A9" }}
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    };
}
export default Carrito;