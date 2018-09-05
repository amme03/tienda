import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    SectionList,
    Text
} from 'react-native';

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




export default Mercado;