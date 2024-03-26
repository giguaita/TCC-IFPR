import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 


export default function QuizCasa() {
  const [areia, setAreia] = useState('');
  const [pedra, setPedra] = useState('');
  const [cimento, setCimento] = useState('');
  const [ferro, setFerro] = useState('');
  const [argamassa, setArgamassa] = useState('');
  const [tijolo, setTijolo] = useState('');
  const [madeira, setMadeira] = useState('');
  const [telha, setTelha] = useState('');
  const [vidro, setVidro] = useState('');
  const [luz, setLuz] = useState('');
  const [piso, setPiso] = useState('');
  const [acabamento, setAcabamento] = useState('');
  const [pintura, setPintura] = useState('');
  const [mao, setMao] = useState('');
  const [outro, setOutro] = useState('');
  
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [areia,pedra,cimento,ferro,argamassa,tijolo,madeira,telha,vidro,luz,piso,acabamento,pintura,mao,outro];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };
  const exibirDicas = () => {
    Alert.alert(
      'Dicas',
      'Lembre-se de manter atualizado o seu Orçamento. E que você precisa ter uma margem de erro pois pode haver imprevistos, como as condições climaticas. ATENTE-SE a não estourar o seu orçamento, Tenha uma reserva emergencial.',
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ScrollView contentContainerStyle={styles.scrollViewContainer}> 
        <View style={styles.container}>

          {/* Botão de dicas */}
          <TouchableOpacity style={styles.botaoDicas} onPress={exibirDicas}>
            <Text style={styles.textoBotaoDicas}>Dicas</Text>
          </TouchableOpacity>

          <Text style={styles.titulo}>Controle de Orçamento de Obra</Text>

              {/* Campos de entrada para os gastos */}
              <TextInput
                style={styles.input}
                placeholder="Areia"
                value={areia}
                onChangeText={(text) => setAreia(text)}
                keyboardType="numeric"
              />

              <TextInput
                      style={styles.input}
                      placeholder="Pedra"
                      value={pedra}
                      onChangeText={(text) => setPedra(text)}
                      keyboardType="numeric"
              />

              <TextInput
                      style={styles.input}
                      placeholder="Cimento e Concreto"
                      value={cimento}
                      onChangeText={(text) => setCimento(text)}
                      keyboardType="numeric"
              />

              <TextInput
                      style={styles.input}
                      placeholder="Ferro e Aço"
                      value={ferro}
                      onChangeText={(text) => setFerro(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Argamassa"
                      value={argamassa}
                      onChangeText={(text) => setArgamassa(text)}
                      keyboardType="numeric"
              />     
              <TextInput
                      style={styles.input}
                      placeholder="Tijolo"
                      value={tijolo}
                      onChangeText={(text) => setTijolo(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Madeira"
                      value={madeira}
                      onChangeText={(text) => setMadeira(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Telhado"
                      value={telha}
                      onChangeText={(text) => setTelha(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Vidro"
                      value={vidro}
                      onChangeText={(text) => setVidro(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Eletrica e Hidraulica"
                      value={luz}
                      onChangeText={(text) => setLuz(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Piso e Revestimento"
                      value={piso}
                      onChangeText={(text) => setPiso(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Acabamentos"
                      value={acabamento}
                      onChangeText={(text) => setAcabamento(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Pintura"
                      value={pintura}
                      onChangeText={(text) => setPintura(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Mão de Obra"
                      value={mao}
                      onChangeText={(text) => setMao(text)}
                      keyboardType="numeric"
              />
              <TextInput
                      style={styles.input}
                      placeholder="Outros"
                      value={outro}
                      onChangeText={(text) => setOutro(text)}
                      keyboardType="numeric"
              />
                          

              {/* Exibir o total de gastos */}
              <Text style={styles.total}>Total de Gastos: R$ {calcularTotal()}</Text>

              {/* Botão para salvar os dados */}
              <TouchableOpacity style={styles.botaoSalvar}>
                <Text style={styles.textoBotao}>Salvar</Text>
              </TouchableOpacity>

              {/* Botão para voltar */}
              <TouchableOpacity
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()} // Usar navigation.goBack() para voltar
              >
                <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150, // Espaçamento superior para afastar o conteúdo do topo
    paddingBottom: 40, // Espaçamento inferior para afastar o conteúdo da parte inferior
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
  botaoDicas: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  oBotaoDicas: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});


