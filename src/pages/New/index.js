import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function New({ navigation }) {
  // Função para lidar com o clique nos botões
  const handleInvestmentClick = (tipoInvestimento) => {
    // Implemente a lógica que você deseja quando um botão for clicado
    console.log(`Botão ${tipoInvestimento} clicado!`);
    // Aqui você pode navegar para a tela de cadastro específica usando o React Navigation
    // navigation.navigate('TelaCadastro', { tipoInvestimento });
  };

  return (
    <View style={styles.container}>
      {/* Texto acima dos botões */}
      <Text style={styles.text}>Selecione seu novo investimento</Text>

      {/* Botões de investimento */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleInvestmentClick('Casa')}
      >
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleInvestmentClick('Viagem')}
      >
        <Text style={styles.buttonText}>Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleInvestmentClick('Carro/Moto')}
      >
        <Text style={styles.buttonText}>Carro/Moto</Text>
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
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#03BB85',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
