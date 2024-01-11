// Importações necessárias
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CadastroCasa from '../Notification/casa/index';  // Certifique-se de que o caminho está correto
import { useNavigation } from '@react-navigation/native';  // Importando o hook de navegação


// Componente principal
export default function Notification() {
  //const [exibirCadastroCasa, setExibirCadastroCasa] = useState(false);
  //const [exibirCadastroAlimentacao, setExibirCadastroAlimentacao] = useState(false);
  const [totalGastos, setTotalGastos] = useState(0);
  const navigation = useNavigation();  // Obtendo a instância de navegação
  

  
  const navigateToCadastro = (screenName) => {
    navigation.navigate(screenName);
  };

  const abrirCadastroCasa = () => {
    console.log('Lógica específica para o botão Casa');
    navigation.navigate('CadastroCasa');
  };

  const abrirCadastroAlimentacao = () => {
    console.log('Lógica específica para o botão Alimentação');
    navigation.navigate('CadastroAlimentacao');
  };

  const abrirCadastroTransporte = () => {
    console.log('Lógica específica para o botão Transporte');
    navigation.navigate('CadastroTransporte');
  };

  return (
    <View style={styles.container}>
      {/* Símbolo de dinheiro */}
      <Text style={styles.moneySymbol}>$</Text>

      {/* Título "Controle de Gastos" */}
      <Text style={styles.text}>Controle de Gastos</Text>

      {/* Botões para os tipos de gastos */}
      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroCasa()}>
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      {/* Botões para os outros tipos de gastos */}
      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroAlimentacao ()}>
        <Text style={styles.buttonText}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroTransporte()}>
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
