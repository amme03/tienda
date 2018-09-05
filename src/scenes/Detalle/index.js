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




class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: {}

        }
    }

    //Ciclo de vida del componente
    async componentDidMount() {
        const data = await Api.getArticleAwaitDetallle(this.props.navigation.getParam('id', ''));
        console.log(data);
        this.setState({ detalle: data, })

    }

    static navigationOptions = {
        title: 'Mercado',
        headerTitleStyle: {
            fontSize: 26,
        }
    }



    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageBarnner}>
                    <Image
                        style={styles.imageBarnner2}
                        source={{ uri: this.state.detalle.image }}></Image>

                </View>
                <View  >
                    <Text style={styles.header}>{this.state.detalle.name} </Text>
                </View>

                <View style={styles.description} >
                    <View style={styles.imageLogoView}>

                        <Image
                            style={styles.imageLogoView}
                            source={{ uri: this.state.detalle.avatar }}></Image>
                    </View>
                    <View style={styles.descriptionText}>

                        <Text style={styles.descriptionName}>Descripción </Text>
                        <Text style={styles.descriptionName}>Cantidad:   </Text>
                        <Text style={styles.descriptionName}>Precio:     </Text>
                    </View>
                    <View style={styles.descriptionText}>

                        <Text style={styles.descriptionLocation}>{this.state.detalle.description}</Text>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.quantity} </Text>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.price}</Text>
                    </View>

                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('CarritoScreen', { id: this.state.detalle._id }) }}
                            title="Añardir al carrito de compras"
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
        height: 200
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




export default Detalle;