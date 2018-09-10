import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginRight: 2
    },
    imageBarnner: {
        width: 400,
        alignItems: 'center',
    },
    imageLogoView: {
        width: 400,
        height: 200,
        alignItems: 'center',
    },
    imageLogo: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 75,
    },
    formInput: {
        paddingLeft: 10,
        color: '#F5A9A9',
        marginTop: 20,
        textAlignVertical: 'auto'
    },
    formInputLabel: {
        paddingLeft: 10,
        color: '#F5A9A9',
        marginTop: 20,
        textAlignVertical: 'auto',
        fontSize: 20,
    },
    buttonStyle: {
        backgroundColor: "#F5A9A9",
        width: 200,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    contenedorBotones: {
       flexDirection: 'row',
       alignContent: 'center',
    },
    espacio: {
        width: 3,
        height: 5,

    },
});

export default styles;
