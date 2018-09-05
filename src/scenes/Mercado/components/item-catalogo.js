import React from 'react';
import { Text, View , Image,StyleSheet,
    TouchableHighlight} from 'react-native';
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


const styles = StyleSheet.create({
    container:{
         flexDirection: 'row',
    },
    content:{
          paddingLeft:10 ,
          justifyContent:'center'
    },
    image:{
    width:70,
    height:70,
    padding: 5,
    margin: 5,
    
    },
    articleName:{
        fontSize:24,
        fontWeight: '200',
    },
    articlePrice:{
        fontSize:10,
        fontWeight: '200',
        
    }

});
export default ItemCatalogo;
