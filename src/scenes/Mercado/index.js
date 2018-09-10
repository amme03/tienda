import React, { Component } from 'react';
import {    View,    ScrollView,  Image,  SectionList,  Text} from 'react-native';
import styles from './components/styles/styles-mercado';
import Api from './../../../utils/api'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


import ItemCatalogo from './components/item-catalogo';
import ItemSeparator from './components/item-separator';


class Mercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticleListMercado: [],
           
        }
    }

    //Ciclo de vida del componente
    async componentDidMount() {
        const data = await Api.getArticleAwait();
        console.log(data);
        this.setState({ ArticleListMercado:data,})

    }

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
                    source={require('./components/image/descarga.jpeg')}/>
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