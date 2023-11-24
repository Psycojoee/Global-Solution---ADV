import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../style';

export default function Login({ navigation }) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    async function handleLogin() {
        try {
            const success = await login({ email, senha });
            if (success) {
                navigation.navigate('Comanda');
            } else {
                setErro("Email ou senha inválida");
            }
        } catch (error) {
            setErro("Ocorreu um erro. Tente novamente.");
        }
    }

    const navigateToSignUp = () => {
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
