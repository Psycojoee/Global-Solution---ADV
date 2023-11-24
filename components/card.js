import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../style'; // importando os estilos definidos no style.js

export default function CardProduto({ produto }) {
    // Determina qual propriedade usar para o caminho da imagem
    const imagePath = produto.imagepath || produto.image;

    return ( 
        <View style={styles.pedidos}>
            <View style={styles.cardProduto}>
                <Image style={styles.thumb} source={{ uri: imagePath }} /> 

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity>
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>0</Text>
                    <TouchableOpacity>
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}