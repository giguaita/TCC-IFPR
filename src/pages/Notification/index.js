import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Notification({ navigation }) {
  // Estado para armazenar o total de gastos
  const [totalGastos, setTotalGastos] = useState(0);

  // Função para navegar para a tela de cadastro com base no tipo de gasto
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
        onPress={() => navigateToCadastro('Casa')}
      >
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

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

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneySymbol: {
    fontSize: 30,
    marginBottom: 5, // Espaço abaixo do símbolo de dinheiro
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100, // Espaço abaixo do título
  },
  button: {
    backgroundColor: '#03BB85', // Cor de fundo do botão
    padding: 10, // Preenchimento interno do botão
    marginVertical: 10, // Margem vertical do botão
    borderRadius: 5, // Borda arredondada do botão
    width: 200, // Largura fixa para todos os botões
    alignItems: 'center', // Alinhamento do conteúdo ao centro do botão
    marginBottom: 10, // Espaço abaixo de cada botão
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto do botão
    fontWeight: 'bold', // Peso da fonte do texto do botão
  },
  contador: {
    fontSize: 20, // Tamanho da fonte do contador
    fontWeight: 'bold', // Peso da fonte do contador
    marginTop: 20, // Espaço acima do contador
  },
});
