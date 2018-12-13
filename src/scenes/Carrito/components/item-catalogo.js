import React from 'react';
import { Text, View, Image, TouchableHighlight, Button } from 'react-native';
import styles from './styles/styles-catalogo';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const ItemCatalogo = (
    props,
) => (
        <TouchableHighlight
            underlayColor="#ccc">
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: props.article.image }}></Image>
                </View>
                <View style={styles.content}>
                    <Text style={styles.articleName}>{props.article.name}</Text>
                    <Text style={styles.articlePrice}>{props.article.description}</Text>
                    <Text style={styles.articlePrice}>{props.article.price}</Text>
                    <Text style={styles.articlePrice}>{props.article.quantity}</Text>
                </View>
                <View style={styles.descriptionButton}>
                    <Button
                        color={'#F5A9A9'}
                        onPress={ () => props.onPressEvent(props.article) }
                        title="Eliminar"
                        loading
                        loadingProps={{ size: "small", color: "#F5A9A9" }}
                        titleStyle={{ fontWeight: "700" }}
                        containerStyle={{ marginTop: 20 }}
                        
                    />
                </View>
            </View>
        </TouchableHighlight>
    );




export default ItemCatalogo;
