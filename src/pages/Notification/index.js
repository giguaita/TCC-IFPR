import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Notification() {
  const [totalGastos, setTotalGastos] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const navigation = useNavigation();

  const abrirCadastroCasa = () => {
    navigation.navigate('CadastroCasa');
  };

  const abrirCadastroAlimentacao = () => {
    navigation.navigate('CadastroAlimentacao');
  };

  const abrirCadastroTransporte = () => {
    navigation.navigate('CadastroTransporte');
  };

  const abrirCadastrosaudeBeleza = () => {
    navigation.navigate('CadastrosaudeBeleza');
  };

  const abrirCadastroEducacao = () => {
    navigation.navigate('CadastroEducacao');
  };

  const abrirCadastroLazer = () => {
    navigation.navigate('CadastroLazer');
  };

  const exibirDicas = () => {
    Alert.alert(
      'Dicas',
      'Adcicione abaixo seus gastos mensais, lembrando que caso algo não faça parte de seus gastos apenas deixe em branco.',
      [
        {
          text: 'OK',
          onPress: () => console.log('Botão OK Pressionado'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.moneySymbol}>$</Text>
      <Text style={styles.text}>Controle de Gastos</Text>

      <TouchableOpacity style={styles.button} onPress={abrirCadastroCasa}>
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={abrirCadastroAlimentacao}>
        <Text style={styles.buttonText}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={abrirCadastroTransporte}>
        <Text style={styles.buttonText}>Transporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={abrirCadastrosaudeBeleza}>
        <Text style={styles.buttonText}>Saúde & Beleza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={abrirCadastroEducacao}>
        <Text style={styles.buttonText}>Educação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={abrirCadastroLazer}>
        <Text style={styles.buttonText}>Lazer & Extras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dicasButton} onPress={exibirDicas}>
        <Text style={styles.dicasButtonText}>Dicas</Text>
      </TouchableOpacity>

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
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40, // Reduzindo o espaço abaixo do título
  },
  button: {
    backgroundColor: '#03BB85',
    padding: 10,
    marginVertical: 10, // Reduzindo o espaçamento vertical
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginBottom: 10, // Reduzindo o espaço abaixo dos botões
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
  dicasButton: {
    backgroundColor: '#FFA500', // Laranja
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 30,
    right: 10,
  },
  dicasButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
