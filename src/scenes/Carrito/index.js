import React, { Component } from 'react';
import { View, ScrollView, Image, SectionList, Button, Text } from 'react-native';
import styles from './components/styles/style-carrito';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleListMercado: [],
            totalAntesIva: 0,
            iva: 0,
            total: 0,
            cantidad: 0,
            isDisabled:false
        }
    }

    //Ciclo de vida del componente
    async componentDidMount() {
        this.totalizar();
    }
//Actualizar despues de eliminar
    actualizar(data) {
        this.props.cartItems = this.props.removeItem(data);
        this.setState({ cantidad: 1 });
        this.totalizarList(data);
    }

    totalizarList(data) {
        var totalVenta = 0;
        var totalIva = 0;
        var valorAntesIva = 0;
        var ArticleListMercadoC = [];
        var i = 0;
        this.props.cartItems.forEach(element => {
            if (element._id !== data._id) {
                totalVenta = totalVenta + element.price;
                totalIva = (totalVenta / (1 + 0.19) * 0.19).toFixed(2);
                valorAntesIva = (totalVenta / (1 + 0.19) * 1 * 1).toFixed(2);
                ArticleListMercadoC[i] = element;
                i++;
            }
        });
        this.setState({
            cantidad: i,
            total: totalVenta,
            iva: totalIva,
            totalAntesIva: valorAntesIva,
            ArticleListMercado: ArticleListMercadoC,
            isDisabled:i==0?true:false,
        });
    }

    //Funcion para calcular el total de la venta
    totalizar() {
        var totalVenta = 0;
        var totalIva = 0;
        var valorAntesIva = 0;
        var ArticleListMercadoC = [];
        var i = 0;
        this.props.cartItems.forEach(element => {
            totalVenta = totalVenta + element.price;
            totalIva = (totalVenta / (1 + 0.19) * 0.19).toFixed(2);
            valorAntesIva = (totalVenta / (1 + 0.19) * 1 * 1).toFixed(2);
            ArticleListMercadoC[i] = element;
            i++;
        });
        this.setState({
            cantidad: this.props.cartItems.length,
            total: totalVenta,
            iva: totalIva,
            totalAntesIva: valorAntesIva,
            ArticleListMercado: ArticleListMercadoC,
            isDisabled:this.props.cartItems.length==0?true:false,
        });
    }

    //Encabezado de la interfaz
    static navigationOptions = {
        title: 'Carrito',
        headerTitleStyle: {
            fontSize: 26,
        }
    }

    renderItem = ({ item }) => <ItemCatalogo navigation={this.props.navigation} article={item} onPressEvent={this.actualizar.bind(this)} />;
    separatorComponent = () => <ItemSeparator />;
    sectionHeader = ({ section }) => <Text style={styles.header}>{section.key}</Text>
    keyExtractor = item => item._id.toString();

    render() {
        return (
            <ScrollView style={styles.container}>

                <View>
                    <View style={styles.description}>
                        <View style={styles.imageLogoView}>
                            <Image
                                style={styles.imageLogoView}
                                source={{ uri: 'https://codigofuentenet.files.wordpress.com/2013/02/shoppingcartempty.jpg' }}></Image>

                        </View>
                        <View style={styles.description} >
                            <View  >
                                <Text style={styles.header}>Total </Text>
                            </View>
                            <View style={styles.descriptionText}>
                                <Text style={styles.descriptionName}>Cantidad:   </Text>
                                <Text style={styles.descriptionName}>Valor:     </Text>
                                <Text style={styles.descriptionName}>Iva:     </Text>
                                <View style={styles.lineaRosa}></View>
                                <Text style={styles.descriptionName}>TOTAL:     </Text>
                            </View>
                            <View style={styles.descriptionText}>
                                <Text style={styles.descriptionLocation}>{this.state.cantidad * 1}</Text>
                                <Text style={styles.descriptionLocation}>{this.state.totalAntesIva * 1}</Text>
                                <Text style={styles.descriptionLocation}>{this.state.iva * 1}</Text>
                                <View style={styles.linea}></View>
                                <Text style={styles.descriptionLocation}>{this.state.total * 1}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.descriptionButton}>
                    <View style={styles.espacio}></View>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('FormularioScreen', { id: this.state.ArticleListMercado._id, cant: this.state.cantidad }) }}
                            title="Ir a pagar"
                            loading
                            loadingProps={{ size: "small", color: "#F5A9A9" }}
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20,paddingBottom: 10, }}
                            disabled={this.state.isDisabled}
                        />
                        <View style={styles.espacio}></View>
                         <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('MercadoScreen') }}
                            title="seguir comprando"
                            loading
                            loadingProps={{ size: "small", color: "#F5A9A9" }}
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20, paddingBottom: 10,}}
                            
                        />
                    </View>
                    <ScrollView style={styles.container}>
                        <SectionList

                            navigation={this.props.navigation}
                            renderItem={this.renderItem}
                            renderSectionHeader={this.sectionHeader}
                            ItemSeparatorComponent={this.separatorComponent}
                            keyExtractor={this.keyExtractor}
                            sections={[{
                                data: this.state.ArticleListMercado, key: 'Viveres'
                            },
                            ]}
                        ></SectionList>

                    </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carrito));