// New.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function New() {
  const navigation = useNavigation();

  const abrirQuizCasa = () => {
    console.log('Lógica específica para o botão Quiz');
    navigation.navigate('QuizCasa');
  };

  const abrirQuizCar = () => {
    console.log('Lógica específica para o botão Quiz');
    navigation.navigate('QuizCar');
  };

  const abrirQuizViagem = () => {
    console.log('Lógica específica para o botão Quiz');
    navigation.navigate('QuizViagem');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Novos Projetos</Text>
      <Text style={styles.subtext}>Selecione seu novo investimento</Text>

      <TouchableOpacity style={styles.button}  onPress={() => abrirQuizCasa()}>
      <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirQuizViagem()}>
        <Text style={styles.buttonText}>Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirQuizCar()}>
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
