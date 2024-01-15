// CadastroCasa.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
//import KeyboardAvoidingComponent from '../../components/keyboard';

export default function CadastroLazer() {
  const [viagem, setViagem] = useState('');
  const [roupa, setRoupa] = useState('');
  const [cinema, setCinema] = useState('');
  const [show, setShow] = useState('');
  const [festa, setFesta] = useState('');
  const [presente, setPresente] = useState('');
  const [animais, setAnimais] = useState('');
  const [streaming, setStreaming] = useState ('');
  const [outro, setOutro] = useState('');
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [viagem, roupa, cinema, show, festa, presente, animais, outro];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };

  return (
   
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Cadastro de Gastos - Lazer & Outros</Text>

      {/* Campos de entrada para os gastos */}
      <TextInput
        style={styles.input}
        placeholder="Viagens"
        value={viagem}
        onChangeText={(text) => setViagem(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Vestimentas"
        value={roupa}
        onChangeText={(text) => setRoupa(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Cinema"
        value={cinema}
        onChangeText={(text) => setCinema(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Shows"
        value={show}
        onChangeText={(text) => setShow(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Festas"
        value={festa}
        onChangeText={(text) => setFesta(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Presentes"
        value={presente}
        onChangeText={(text) => setPresente(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Serviços de Streaming"
        value={streaming}
        onChangeText={(text) => setStreaming(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Animais Domésticos"
        value={animais}
        onChangeText={(text) => setAnimais(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Outros"
        value={outro}
        onChangeText={(text) => setOutro(text)}
        keyboardType="numeric"
      />

      {/* Exibir o total de gastos */}
      <Text style={styles.total}>Total de Gastos: R$ {calcularTotal()}</Text>

      {/* Botão para salvar os dados */}
      <TouchableOpacity style={styles.botaoSalvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão para voltar */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()} // Usar navigation.goBack() para voltar
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  botaoSalvar: {
    backgroundColor: '#03BB85',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  botaoVoltar: {
    backgroundColor: '#E84803', // Cor de fundo do botão de voltar
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});


