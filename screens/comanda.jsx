import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext.js';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style.js';

// Define o componente Comanda e exporta como padrão
export default function Comanda({ navigation }) {
    const { user } = useContext(AuthContext);
    const [medicamentos, setMedicamentos] = useState([]);
    const [erro, setErro] = useState("");

    const carregarMedicamentos = useCallback(async () => {
        // Verifica se um usuário está logado e se tem um nome
        if (user && user.nome) {
            try {
                const response = await fetch('http://localhost:3000/usuarios'); // Aguarda a conversão da resposta para o formato JSON
                const data = await response.json();
                const listaUsuarios = Array.isArray(data) ? data : data.usuarios; // Verifica se a resposta é um array ou contém um campo 'usuarios', ajustando conforme o formato da resposta
                const usuarioEncontrado = listaUsuarios.find(u => u.nome === user.nome); // Encontra o usuário atual na lista baseado no nome
                if (usuarioEncontrado && usuarioEncontrado.medicamentos) { // Verifica se o usuário foi encontrado e se possui um campo 'medicamentos'
                    setMedicamentos(usuarioEncontrado.medicamentos); // Atualiza o estado 'medicamentos' com os medicamentos do usuário
                } else {
                    setErro("Usuário não encontrado ou sem medicamentos.");
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setErro("Erro ao carregar os medicamentos. Detalhes: " + error.message);
            }
        }
    }, [user]);

    const excluirMedicamento = async (idMedicamento) => { // Função assíncrona para excluir um medicamento especificado pelo seu ID
        if (user && user.id) { // Verifica se existe um usuário logado e se tem um ID
            try { // Faz uma requisição GET para obter dados do usuário pelo seu ID
                const response = await fetch(`http://localhost:3000/usuarios/${user.id}`);
                const usuario = await response.json();
                const medicamentosAtualizados = usuario.medicamentos.filter(m => m.id !== idMedicamento);
                
                await fetch(`http://localhost:3000/usuarios/${user.id}`, { // Faz uma requisição PUT para atualizar os dados do usuário com a nova lista de medicamentos
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...usuario, medicamentos: medicamentosAtualizados }),
                });

                setMedicamentos(medicamentosAtualizados); // Atualiza o estado 'medicamentos' no componente com a nova lista de medicamentos
            } catch (error) { // Em caso de erro na requisição, registra o erro no console e atualiza o estado 'erro' com detalhes do erro
                console.error('Erro ao excluir medicamento:', error);
                setErro("Erro ao excluir medicamento. Detalhes: " + error.message);
            }
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', carregarMedicamentos);
        carregarMedicamentos();
        return unsubscribe;
    }, [navigation, carregarMedicamentos]);

    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Olá,</Text>
                    <Text style={styles.titleComanda}>{user ? user.nome : ''}</Text>
                    <Text style={styles.titleMedicamento}>Medicamentos para tomar</Text>
                </View>
                <MaterialIcons name="exit-to-app" size={24} color="black"
                    onPress={() => navigation.navigate('Home')} />
            </View>

            <ScrollView>
                {erro ? (
                    <Text style={styles.error}>{erro}</Text>
                ) : (
                    medicamentos.map((medicamento, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                            <Text style={styles.inputLogin}>
                                {medicamento.nome} - {medicamento.horariosDeDosagem} - {medicamento.quantidade}
                            </Text>
                            <TouchableOpacity onPress={() => excluirMedicamento(medicamento.id)}>
                                <MaterialIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ScrollView>

            <TouchableOpacity style={styles.buttonComanda} onPress={() => navigation.navigate('Produtos')}>
                <Text style={styles.buttonText}>Cadastrar novo medicamento</Text>
            </TouchableOpacity>
        </View>
    );
}
