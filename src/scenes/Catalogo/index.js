import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    SectionList,
    Text
} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleListBano: [],
            ArticleListCocina: [],
            ArticleListSala: []
        }
    }

    //Ciclo de vida del componente
    componentDidMount() {
        const articlesBano = [
            {
                name: 'Espejo',
                price: '$243.244',
                photo: 'http://mueblescasanova.com/wp-content/uploads/2016/09/decoracion-espejo-294-de22-casanova.jpg',
                cantidad: '1 unidad',
                description:'Espejo con luz led, 42 piezas de luz led calida, se activa con un switch de sensor en la parte frontal medida 80cm x 60cm',
                id: 1
            },

            {
                name: 'Toallas',
                price: '$90.000',
                photo: 'https://ae01.alicdn.com/kf/HTB1PqzLMVXXXXaFapXXq6xXFXXXh/New-Arrival-70-140cm-650g-Thick-Luxury-Egyptian-Cotton-Bath-Towels-Solid-SPA-Bathroom-Beach-Terry.jpg',
                cantidad: '4 unidades',
                description:'Modelo: WAFFLE. \n Tipo: Toallas de cuerpo. \n  Material: Algodón.\n Apto para lavadora: Sí \n Hecho en: Portugal.Garantía del proveedor: 1 año.',
                id: 2
            },

            {
                name: 'Juego de baño',
                price: '$12.000',
                photo: 'http://www.hispaniaqualitas.com/funciones/decoracion/2014/05/407655jffgfg-01-459(2)rectangular.jpg',
                cantidad: '1 unidad',
                id: 3
            },

            {
                name: 'Velas aromaticas',
                price: '$24.000',
                photo: 'https://static.vix.com/es/sites/default/files/styles/large/public/i/istock-504484134.jpg',
                cantidad: '4 unidades',
                id: 3
            },
        ];

        const articlesCocina = [
            {
                name: 'Juego de ollas',
                price: '$443.244',
                photo: 'https://i.pinimg.com/564x/a3/c8/cd/a3c8cddfcc5abfc79fb9cce74206931c.jpg',
                cantidad: '1 unidad',
                id: 1
            },

            {
                name: 'Mugs',
                price: '$55.000',
                photo: 'https://cdn.shopify.com/s/files/1/1044/6070/products/Mug_Box_Set_With_Logo_and_Bubble_1024x1024.jpg',
                cantidad: '5 unidades',
                id: 2
            },

            {
                name: 'Vajilla',
                price: '$1.324.664',
                photo: 'https://ae01.alicdn.com/kf/HTB1C.QMQFXXXXacXVXXq6xXFXXXR/Keramik-geschirr-set-bone-china-H-mark-mosaik-design-gliederung-in-gold-4-st-cke-geschirr.jpg_50x50.jpg',
                cantidad: '1 unidad',
                id: 3
            },
        ];

        const articlesSala = [
            {
                name: 'Sofa',
                price: '$4.430.244',
                photo: 'https://productimages.mybobs.com/20023542003/20023542003_hero_listings_large.jpg',
                cantidad: '1 unidad',
                id: 1
            },

            {
                name: 'Cojines',
                price: '$50.000',
                photo: 'http://www.sodimac.cl/static/Homy/html/contenido-estatico/especiales/Cojines-Furor/images/vit-etnico-01.jpg',
                cantidad: '2 unidades',
                id: 2
            },

            {
                name: 'Cuadro',
                price: '$324.664',
                photo: 'http://d26lpennugtm8s.cloudfront.net/stores/497/316/products/471-a89a4f65812a640cd415174876001295-640-0.jpg',
                cantidad: '1 unidad',
                id: 3
            },
        ];

        this.setState({
            ArticleListBano: articlesBano,
            ArticleListCocina: articlesCocina,
            ArticleListSala: articlesSala
        });



    }

    static navigationOptions = {
        title: 'Catalogo',
        headerTitleStyle: {
            fontSize: 26,
        }
    }

    renderItem = ({ item }) => <ItemCatalogo navigation={this.props.navigation} article={item} />;
    separatorComponent = () => <ItemSeparator />;
    sectionHeader = ({ section }) => <Text style={styles.header}>{section.key}</Text>
    keyExtractor = item => item.id.toString();

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Image
                    style={styles.imageBarnner}
                    source={require('./components/image/decoracion-para-el-hogar-tendencias.png')}/>
                </View>
                <View>
                    <ScrollView style={styles.container}>

                        <SectionList

                            renderItem={this.renderItem}
                            renderSectionHeader={this.sectionHeader}
                            ItemSeparatorComponent={this.separatorComponent}
                            keyExtractor={this.keyExtractor}
                            sections={[{
                                data: this.state.ArticleListBano, key: 'Baño'
                            },
                            {
                                data: this.state.ArticleListCocina, key: 'Cocina'
                            },
                            {
                                data: this.state.ArticleListSala, key: 'Sala'
                            }
                            ]}
                        ></SectionList>
                    </ScrollView>
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
        width: 414,
        height: 280
    },
    header: {
        fontSize: 18,
        backgroundColor: '#F5A9A9',
        borderBottomColor: '#F5A9A9',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,

    }

});




export default Catalogo;