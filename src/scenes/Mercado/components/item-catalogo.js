import React from 'react';
import { Text, View , Image,TouchableHighlight} from 'react-native';
import styles from './styles/styles-catalogo';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const ItemCatalogo = (
    props,
) => (
    <TouchableHighlight onPress={()=>props.navigation.navigate('DetalleScreen', {id:props.article._id})}
    underlayColor="#ccc">
    <View style={styles.container}>
        <View>
            <Image
             style={styles.image}
             source={{uri:props.article.image}}></Image>
        </View>
        <View  style={styles.content}>
            <Text style={styles.articleName}>{props.article.name}</Text>
            <Text style={styles.articlePrice}>{props.article.description}</Text>
			<Text style={styles.articlePrice}>{props.article.price}</Text>
            <Text style={styles.articlePrice}>{props.article.quantity}</Text>
        </View>

    </View>
    </TouchableHighlight>
);

export default ItemCatalogo;
