import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Notification({ navigation }) {
  const navigateToCadastro = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.moneySymbol}>$</Text>
      <Text style={styles.text}>Controle de Gastos</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
    // Estilo para o container principal
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    // Estilo para o símbolo de dinheiro
    moneySymbol: {
      fontSize: 30,
      marginBottom: 5, // Margem inferior de 5 unidades
    },
    
    // Estilo para o texto "Controle de Gastos"
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20, // Margem inferior de 20 unidades
    },
    
    // Estilo para os botões
    button: {
      backgroundColor: '#03BB85', // Cor de fundo
      padding: 10, // Preenchimento interno de 10 unidades
      marginVertical: 10, // Margem vertical de 10 unidades
      borderRadius: 5, // Borda arredondada com raio de 5 unidades
      width: 200, // Largura fixa para todos os botões
      alignItems: 'center', // Alinhamento do conteúdo ao centro
    },
    
    // Estilo para o texto dos botões
    buttonText: {
      color: 'white', // Cor do texto
      fontSize: 18, // Tamanho da fonte
      fontWeight: 'bold', // Negrito
    },
  });
  
