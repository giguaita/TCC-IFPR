import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

  const exibirInstrucoes = () => {
    Alert.alert(
      'Instruções',
      'Selecione o tipo de investimento desejado e adicione os gastos que está tendo ou se planejando ter para determinada atividade. Lembre-se que estamos aqui para ajudar, então não esqueça de manter atualizado seu orçamento de gastos',
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
      <Text style={styles.text}>Novos Projetos</Text>
      <Text style={styles.subtext}>Selecione seu novo investimento</Text>

      <TouchableOpacity style={styles.button} onPress={() => abrirQuizCasa()}>
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirQuizViagem()}>
        <Text style={styles.buttonText}>Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirQuizCar()}>
        <Text style={styles.buttonText}>Carro/Moto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.instrucoesButton} onPress={exibirInstrucoes}>
        <Text style={styles.instrucoesButtonText}>Instruções</Text>
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
  instrucoesButton: {
    backgroundColor: '#FFA500', // Laranja
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  instrucoesButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    marginBottom: 20,
  },
});
