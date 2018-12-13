import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 2,
        marginRight: 2
    },
    imageBarnner: {
        width: 400,
        height: 250,
        alignItems: 'center',
    },
    imageBarnner2: {
        width: 300,
        height: 250
    },
    imageLogoView: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 18,
        backgroundColor: '#F5A9A9',
        borderBottomColor: '#D8D8D8',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        color: '#F8EFFB',
    },
    description: {
        flexDirection: 'row',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        height: 200,
        alignItems: 'center',
    },
    descriptionText: {
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
    },
    descriptionName: {
        color: '#F5A9A9',
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
    },
    descriptionLocation: {
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
    },
    descriptionButton: {
        paddingVertical: 3,
        marginBottom: 3,
        paddingLeft: 10,
        width: 500,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    linea: {
        paddingLeft: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#D8D8D8',
    },
    lineaRosa: {
        paddingLeft: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#F5A9A9',
    },
});
export default styles;
