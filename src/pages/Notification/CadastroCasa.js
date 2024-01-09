// CadastroCasa.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function CadastroCasa() {
  const [aluguel, setAluguel] = useState('');
  const [agua, setAgua] = useState('');
  const [luz, setLuz] = useState('');
  const [internet, setInternet] = useState('');
  const [emprestimo, setEmprestimo] = useState('');
  const [condominio, setCondominio] = useState('');
  const [gas, setGas] = useState('');
  const [manutencoes, setManutencoes] = useState('');
  const [iptu, setIptu] = useState('');

  const calcularTotal = () => {
    const valores = [aluguel, agua, luz, internet, emprestimo, condominio, gas, manutencoes, iptu];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Gastos - Casa</Text>

      {/* Campos de entrada para os gastos */}
      <TextInput
        style={styles.input}
        placeholder="Aluguel"
        value={aluguel}
        onChangeText={(text) => setAluguel(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Água"
        value={agua}
        onChangeText={(text) => setAgua(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Luz"
        value={luz}
        onChangeText={(text) => setLuz(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Internet"
        value={internet}
        onChangeText={(text) => setInternet(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Empréstimo ou Financiamento"
        value={emprestimo}
        onChangeText={(text) => setEmprestimo(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do Condomínio"
        value={condominio}
        onChangeText={(text) => setCondominio(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gás"
        value={gas}
        onChangeText={(text) => setGas(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Manutenções"
        value={manutencoes}
        onChangeText={(text) => setManutencoes(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="IPTU"
        value={iptu}
        onChangeText={(text) => setIptu(text)}
        keyboardType="numeric"
      />

      {/* Exibir o total de gastos */}
      <Text style={styles.total}>Total de Gastos: R$ {calcularTotal()}</Text>

      {/* Botão para salvar os dados */}
      <TouchableOpacity style={styles.botaoSalvar}>
        <Text style={styles.textoBotao}>Salvar</Text>
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
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
