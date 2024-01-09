import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Notification({ navigation }) {
  const navigateToCadastro = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
