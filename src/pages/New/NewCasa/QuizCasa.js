import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SQLite } from 'expo-sqlite';


export default function QuizCasa() {
  const [area, setArea] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Dados salvos:', area);

    // Voltar para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro da Planta</Text>

      <TextInput
        style={styles.input}
        placeholder="Área"
        value={area}
        onChangeText={(text) => setArea(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={handleSave}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
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
  botaoVoltar: {
    backgroundColor: '#E84803', // Cor de fundo do botão de voltar
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});


