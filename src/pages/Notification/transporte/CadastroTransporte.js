import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 


export default function CadastroTransporte() {
  const [tranporteP, setTransporteP] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [estacionamento, setEstacionamento] = useState('');
  const [manutencao, setManutencao] = useState('');
  const [seguro, setSeguro] = useState('');
  const [IPVA, setIPVA] = useState('');
  const [uber, setUber] = useState('');
  const [outros, setOutros] = useState('');
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [tranporteP, combustivel, estacionamento, manutencao, seguro, IPVA, uber,outros];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };

  return (
   
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Cadastro de Gastos - Transporte</Text>

      {/* Campos de entrada para os gastos */}
      <TextInput
        style={styles.input}
        placeholder="Transporte Público"
        value={tranporteP}
        onChangeText={(text) => setTransporteP(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Combustível"
        value={combustivel}
        onChangeText={(text) => setCombustivel(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Estacionamento"
        value={estacionamento}
        onChangeText={(text) => setEstacionamento(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Manutenções do Automovél"
        value={manutencao}
        onChangeText={(text) => setManutencao(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Seguro"
        value={seguro}
        onChangeText={(text) => setSeguro(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="IPVA"
        value={IPVA}
        onChangeText={(text) => setIPVA(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Uber/ APP de transporte"
        value={uber}
        onChangeText={(text) => setUber(text)}
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


