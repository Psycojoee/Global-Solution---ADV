import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC', //Cor da página inicial
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBetween: {
        flex: 1,
        backgroundColor: '#DCDCDC', // Cor da página do login (onde está seja bem vindo)
        alignItems: 'center',
        padding: 20,
            
    },
    containerCadastro: {
        flex: 1,
        backgroundColor: '#DCDCDC', // Cor da página do login (onde está seja bem vindo)
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 300,
        right: 91,
    },
    containerTitulo: {
        alignItems: 'center',
    },
    containerTest: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Cor da página do login (onde está seja bem vindo)
        alignItems: 'center',
        justifyContent: 'center',
        padding: 200,
        flexDirection:'column',
    },
    title: { //Definição da fonte e do estilo
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleComanda: { //Definição da fonte e do estilo
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleMedicamento: { //Definição da fonte e do estilo
        fontSize: 25,
        left: 30,
        top: 30,
        fontWeight: 'bold',
    },
    titleLogin: { //Definição da fonte e do estilo
        fontSize: 24,
        fontWeight: 'bold',
        top: -50,
    },
    input: {
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 4
    },
    inputLogin: {
        padding: 8,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 4,
        color:'fff',
    },
    inputCadastro: {
        padding: 8,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        color:'fff',
        margin: 5,
    },
    button: {
        backgroundColor: '#A52A2A', //cor do botão
        color: '#000',
        fontWeight:'bold',
        padding: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 20,
    },
    buttonComanda: {
        backgroundColor: '#000', //cor do botão
        color: '#000',
        fontWeight:'bold',
        padding: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: -30,
    },
    buttonCadastro: {
        backgroundColor: '#000', //cor do botão
        color: '#000',
        fontWeight:'bold',
        padding: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 20,
    },
    buttonLogin: {
        backgroundColor: '#000', //cor do botão
        color: '#000',
        fontWeight:'bold',
        padding: 8,
        paddingHorizontal: 48,
        borderRadius: 4,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    headerCadastro: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        left: 150,
        top:-250,
    },
    imagem: {
        width: '45%',
        height: 310,
        position: 'relative',
        top: -150,
    },
    box: {
        borderColor: '#121A2C',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    pedidos: {
        width: '100%',
    },
    pedidoData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pedidoDataTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
    },
    cardProduto: {
        borderColor: '#121A2C55',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
    },
    produtoData: {
        flex: 1,
        alignSelf: 'flex-start',
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    spinner: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 999,
    },
    spinnerMinus: {
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 999,
        width: 24,
        height: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    spinnerPlus: {
        textAlign: 'center',
        backgroundColor: '#121A2C',
        borderRadius: 999,
        width: 24,
        height: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FFF',
    },
    spinnerValue: {
        textAlign: 'center',
        width: 24,
        height: 24,
        lineHeight: 24,
    },
    scroll: {
        width: '100%',
    },
    error:{
        color: 'red'
    }

});