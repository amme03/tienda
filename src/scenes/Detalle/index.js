import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Text } from 'react-native';
import Api from './../../../utils/api';
import styles from './components/styles/style-detalle';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: {},
            contador: 0,
            isDisabled:true,
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



    incrementar() {
        this.setState({
            contador:  this.state.contador===20 ? 20:this.state.contador + 1,
            isDisabled:false,
        })
    }

    decrementar() {
        console.log(this.state.contador===0);
        this.setState({
            isDisabled:this.state.contador<=1,
            contador: this.state.contador===0 ? 0:this.state.contador - 1,
            
        })
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
                        <View  style={styles.contenedor}>
                            <Text style={styles.descriptionBotones}>{this.state.contador} </Text>
                            <View  style={styles.contenedorBotones}>
                            <Button color={'#F5A9A9'} onPress={this.incrementar.bind(this)} title="+"></Button>
                            <View style={styles.espacio}></View>
                            <Button color={'#F5A9A9'} onPress={this.decrementar.bind(this)} title="-"></Button>
                            </View>
                        </View>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.price }</Text>
                        <Text style={styles.descriptionLocation}>{this.state.detalle.price * this.state.contador}</Text>

                    </View>
                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('CarritoScreen', { id: this.state.detalle._id,cant:this.state.contador }) }}
                            title="Añardir al carrito de compras"
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

export default Detalle;