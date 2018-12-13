import React, { Component } from 'react';
import {  View, ScrollView,Image, Button,Text, TextInput } from 'react-native';
import Api from './../../../utils/api';
import styles from './components/styles/style-formulario';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import i18n from './../i18n';
class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    //Ciclo de vida del componente
    async componentDidMount() {
      }
    static navigationOptions = {
        title: 'Datos de compra',
        headerTitleStyle: {
            fontSize: 26,
        }
    }
    render() {
       
        return (
            <ScrollView style={styles.container}>
                <View style={styles.imageLogoView}>
                    <Image
                        style={styles.imageLogo}
                        source={{ uri: 'https://c.wallhere.com/photos/f2/5d/happy_women_music_glasses_women_with_glasses_face_profile_headphones-220024.jpg!d' }}></Image>
                </View>
                <View style={styles.formWrapper}>
                    <Text style={styles.formLabel}>  {i18n.t('NAME')} </Text>
                    <Text style={styles.formInput}> Ana Maria Marrugo Escobar </Text>
                    <Text style={styles.formLabel}> {i18n.t('PHONE')} </Text>
                    <TextInput
                        placeholder={i18n.t('TELCONT')} 
                        style={styles.formInput}
                    />
                    <Text style={styles.formLabel}> {i18n.t('EMAIL')} </Text>
                    <Text style={styles.formInput}>amme03@gmail.com </Text>
                    <Text style={styles.formLabel}>{i18n.t('ADRRESS')}  </Text>
                    <TextInput
                        placeholder={i18n.t('PRODADDRES')}
                        style={styles.formInput}
                    />
                </View>
                <View style={styles.imageBarnner} >
                    <View style={styles.descriptionButton}>
                        <Button
                            color={'#F5A9A9'}
                            onPress={() => { this.props.navigation.navigate('SuccessScreen') }}
                            title="Finalizar compra"
                            loading
                            titleStyle={{ fontWeight: "700" }}
                            containerStyle={{ marginTop: 20 }}
                           
                        />
                    </View>
                </View>
            </ScrollView>
        );
    };
}

export default Formulario;