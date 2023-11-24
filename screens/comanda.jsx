import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext.js';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style.js';

export default function Comanda({ navigation }) {
    const { user } = useContext(AuthContext);
    const [medicamentos, setMedicamentos] = useState([]);
    const [erro, setErro] = useState("");

    const carregarMedicamentos = useCallback(async () => {
        if (user && user.nome) {
            try {
                const response = await fetch('http://localhost:3000/usuarios');
                const data = await response.json();
                const listaUsuarios = Array.isArray(data) ? data : data.usuarios;
                const usuarioEncontrado = listaUsuarios.find(u => u.nome === user.nome);
                if (usuarioEncontrado && usuarioEncontrado.medicamentos) {
                    setMedicamentos(usuarioEncontrado.medicamentos);
                } else {
                    setErro("Usuário não encontrado ou sem medicamentos.");
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setErro("Erro ao carregar os medicamentos. Detalhes: " + error.message);
            }
        }
    }, [user]);

    const excluirMedicamento = async (idMedicamento) => {
        if (user && user.id) {
            try {
                const response = await fetch(`http://localhost:3000/usuarios/${user.id}`);
                const usuario = await response.json();
                const medicamentosAtualizados = usuario.medicamentos.filter(m => m.id !== idMedicamento);
                
                await fetch(`http://localhost:3000/usuarios/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...usuario, medicamentos: medicamentosAtualizados }),
                });

                setMedicamentos(medicamentosAtualizados);
            } catch (error) {
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
