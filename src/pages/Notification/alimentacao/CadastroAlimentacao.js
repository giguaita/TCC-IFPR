import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,TouchableWithoutFeedback, Keyboard } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 


export default function CadastroAlimentacao() {
  const [mercado, setMercado] = useState('');
  const [restaurante, setRestaurante] = useState('');
  const [outros, setOutros] = useState('');
  
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [mercado,restaurante,outros];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Gastos - Alimentação</Text>

      {/* Campos de entrada para os gastos */}
      <TextInput
        style={styles.input}
        placeholder="Mercado"
        value={mercado}
        onChangeText={(text) => setMercado(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurante"
        value={restaurante}
        onChangeText={(text) => setRestaurante(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Outros"
        value={outros}
        onChangeText={(text) => setOutros(text)}
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
    </TouchableWithoutFeedback>
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
