import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        padding: 5,
        margin: 5,

    },
    articleName: {
        fontSize: 24,
        fontWeight: '200',
    },
    articlePrice: {
        fontSize: 10,
        fontWeight: '200',
    }

});
export default styles;
