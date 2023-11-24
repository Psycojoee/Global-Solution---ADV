import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../style';

export default function Login({ navigation }) { // Componente Login, que é exportado como padrão
    const { login } = useContext(AuthContext); // Utiliza o useContext para acessar o método login do AuthContext
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    async function handleLogin() { // Função assíncrona para lidar com o processo de login
        try {
            const success = await login({ email, senha }); // Tenta fazer login com o email e senha fornecidos
            if (success) {  // Se o login for bem-sucedido, navega para a tela 'Comanda'
                navigation.navigate('Comanda');
            } else { // Se o login falhar, atualiza o estado 'erro' com uma mensagem
                setErro("Email ou senha inválida");
            }
        } catch (error) { // Em caso de erro no processo, atualiza o estado 'erro'
            setErro("Ocorreu um erro. Tente novamente.");
        }
    }

    const navigateToSignUp = () => { // Função para navegar para a tela de cadastro (SignUp)
        navigation.navigate('SignUp'); 
    };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.imagem}
                source={require('../assets/robozao.png')} 
            />
            <Text style={styles.titleLogin}>Login</Text>
            <TextInput 
                style={styles.inputLogin}
                placeholder='E-mail' 
                value={email} 
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput 
                style={styles.inputLogin}
                placeholder='Senha' 
                value={senha} 
                onChangeText={setSenha}
                secureTextEntry 
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSignUp} style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
            {erro ? <Text style={styles.error}>{erro}</Text> : null}
        </View>
    );
}
