// CadastroCasa.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
//import KeyboardAvoidingComponent from '../../components/keyboard';

export default function CadastrosaudeBeleza() {
  const [remedio, setRemedio] = useState('');
  const [plano, setPlano] = useState('');
  const [medico, setMedico] = useState('');
  const [higiene, setHigiene] = useState('');
  const [academia, setAcademia] = useState('');
  const [salao, setSalao] = useState('');
  const [outro, setOutro] = useState('');
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [remedio, plano, medico, higiene, academia, salao, outro];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };

  return (
   
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Cadastro de Gastos - Saúde & Beleza</Text>

      {/* Campos de entrada para os gastos */}
      <TextInput
        style={styles.input}
        placeholder="Remédios"
        value={remedio}
        onChangeText={(text) => setRemedio(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Plano de Saúde"
        value={plano}
        onChangeText={(text) => setPlano(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Médicos e Psicólogos"
        value={medico}
        onChangeText={(text) => setMedico(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Produtos de Higiene"
        value={higiene}
        onChangeText={(text) => setHigiene(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Academia"
        value={academia}
        onChangeText={(text) => setAcademia(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Salão de Beleza/Barbearia"
        value={salao}
        onChangeText={(text) => setSalao(text)}
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
    backgroundColor: '#4285F4', // Cor de fundo do botão de voltar
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});


