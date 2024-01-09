import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CadastroCasa from '../Notification/CadastroCasa';

export default function Notification({ navigation }) {
  const [exibirCadastroCasa, setExibirCadastroCasa] = useState(false);
  const [totalGastos, setTotalGastos] = useState(0);

  const navigateToCadastro = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Símbolo de dinheiro */}
      <Text style={styles.moneySymbol}>$</Text>

      {/* Título "Controle de Gastos" */}
      <Text style={styles.text}>Controle de Gastos</Text>

      {/* Botões para os tipos de gastos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setExibirCadastroCasa(!exibirCadastroCasa)}
      >
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      {/* Exibe o componente de cadastro de Casa condicionalmente */}
      {exibirCadastroCasa && <CadastroCasa />}

      {/* Botões para os outros tipos de gastos */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToCadastro('Alimentacao')}
      >
        <Text style={styles.buttonText}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToCadastro('Transporte')}
      >
        <Text style={styles.buttonText}>Transporte</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToCadastro('SaudeBeleza')}
      >
        <Text style={styles.buttonText}>Saúde & Beleza</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToCadastro('Educacao')}
      >
        <Text style={styles.buttonText}>Educação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToCadastro('Lazer')}
      >
        <Text style={styles.buttonText}>Lazer & Extras</Text>
      </TouchableOpacity>

      {/* Exibe o total de gastos na interface */}
      <Text style={styles.contador}>Total de Gastos: R$ {totalGastos.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneySymbol: {
    fontSize: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#03BB85',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contador: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
