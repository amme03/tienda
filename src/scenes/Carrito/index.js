import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Button,
    Text
} from 'react-native';


import Api from './../../../utils/api'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);




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
        console.log(data);
        this.setState({ carrito: data, iva:0.16, cantidad:1, })

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
                        <Text style={styles.descriptionName}>Precio:     </Text>
                        <Text style={styles.descriptionName}>Iva:     </Text>
                        <Text style={styles.descriptionName}>_________</Text>
                        <Text style={styles.descriptionName}>TOTAL:     </Text>
                    </View>
                    <View style={styles.descriptionText}>

                        <Text style={styles.descriptionLocation}>{this.state.cantidad*1}</Text>
                        <Text style={styles.descriptionLocation}>{this.state.carrito.price*this.state.cantidad*1}</Text>
                        <Text style={styles.descriptionLocation}>{this.state.carrito.price*this.state.iva*this.state.cantidad*1}</Text>
                        <Text style={styles.descriptionLocation}>__________ </Text>
                        <Text style={styles.descriptionLocation}>{this.state.carrito.price*this.state.iva*this.state.cantidad*1+this.state.carrito.price*this.state.cantidad*1}</Text>
                    </View>

                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('FormularioScreen', { id: this.state.carrito._id }) }}
                            title="Ir a pagar"
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
        width: 100,
        height: 100,
        borderRadius: 50,

    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
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

    description: {

        flexDirection: 'row',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        height: 200,
        alignItems: 'center',
    },
    descriptionText: {

        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,

    },
    descriptionName: {
        color: '#F5A9A9',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,

    },
    descriptionLocation: {

        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,

    },
    descriptionButton: {

        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        width: 200,
        height: 50,
        alignItems: 'center',

    },
});




export default Carrito;