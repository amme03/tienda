import React, { Component } from 'react';
import { View, ScrollView, Image, SectionList, Text } from 'react-native';
import styles from './components/styles/styles-mercado';
//import Api from './../../../utils/api' --con api externa
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
//import HttpUser from '../../scenes/services/Users/http-user';   //Prueba de concepto
import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';
import HttpProducts from '../../scenes/services/Products/http-products';

class Mercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleListMercado: [],

        }
    }

    //Ciclo de vida del componente
    async componentDidMount() {
        /* const data = await Api.getArticleAwait();
           this.setState({ ArticleListMercado: data, })
           console.log(data);            //con api externa
           this.getUsers();              //Prueba de concepto
           this.getUserByToken() ;*/
        this.getProducts();
    }
    //Prueba de concepto
    /*  async getUsers() {
          const data = await HttpUser.getUsers(); 
          console.log(data);
      }
  
      async getUserByToken() {
          const data = await HttpUser.getUsersByToken();
          console.log(data);
      }*/

    async getProducts() {
        const data = await HttpProducts.getProducts();
        this.setState({ ArticleListMercado: data })

    }
//Encabezado de la interfaz
    static navigationOptions = {
        title: 'Mercado',
        headerTitleStyle: {
            fontSize: 26,
        }
    }

    renderItem = ({ item }) => <ItemCatalogo navigation={this.props.navigation} article={item} />;
    separatorComponent = () => <ItemSeparator />;
    sectionHeader = ({ section }) => <Text style={styles.header}>{section.key}</Text>
    keyExtractor = item => item._id.toString();

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Image
                        style={styles.imageBarnner}
                        source={require('./components/image/descarga.jpeg')} />
                </View>
                <View>
                    <ScrollView style={styles.container}>
                        <SectionList
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
export default Mercado;