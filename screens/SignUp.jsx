import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from '../style';
import { MaterialIcons } from '@expo/vector-icons';

const SignUp = ({ navigation }) => { 
  const [userDetails, setUserDetails] = useState({ // Estado para armazenar os detalhes do usuário a ser cadastrado
    nome: '',
    email: '',
    senha: '',
    endereco: '',
    data: '',
    medicamentos: []  
  });
  const [erro, setErro] = useState("");

  const handleInputChange = (field, value) => { // Função para manipular as mudanças de input, atualizando o estado userDetails
    setUserDetails({
      ...userDetails,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    if (!userDetails.nome || !userDetails.email || !userDetails.senha) {
      setErro("Preencha os campos corretamente");
      return;
    }

    try { // Envia os detalhes do usuário para o servidor para criar um novo usuário
      const response = await axios.post('http://localhost:3000/usuarios', userDetails);
      console.log(response.data);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      setErro("Erro ao realizar o cadastro"); // Atualiza o estado 'erro' com a mensagem de erro
    }
  };

  return (
    <View style={styles.containerCadastro}>
      <Text style={styles.titleLogin}>Cadastro</Text>
      <View style={styles.headerCadastro}>
        <MaterialIcons name="exit-to-app" size={24} color="black"
          onPress={() => navigation.navigate('Home')} />
      </View>

      <TextInput
        style={styles.inputCadastro}
        placeholder="Nome"
        onChangeText={(value) => handleInputChange('nome', value)}
        value={userDetails.nome}
      />
      <TextInput
        style={styles.inputCadastro}
        placeholder="Email"
        onChangeText={(value) => handleInputChange('email', value)}
        value={userDetails.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputCadastro}
        placeholder="Senha"
        onChangeText={(value) => handleInputChange('senha', value)}
        value={userDetails.senha}
        secureTextEntry
      />
      <TextInput
        style={styles.inputCadastro}
        placeholder="Endereço"
        onChangeText={(value) => handleInputChange('endereco', value)}
        value={userDetails.endereco}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputCadastro}
        placeholder="Data"
        onChangeText={(value) => handleInputChange('data', value)}
        value={userDetails.data}
        autoCapitalize="none"
      />
      
      {erro !== "" && <Text style={styles.error}>{erro}</Text>}

      <TouchableOpacity onPress={handleSubmit} style={styles.buttonLogin}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
