import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 


export default function QuizCar() {
  const [valor, setValor] = useState('');
  const [seguro, setSeguro] = useState('');
  const [licenca, setLicenca] = useState('');
  const [documentos, setDocumentos] = useState('');
  const [manutencao, setManutencao] = useState('');
  const [taxa, setTaxa] = useState('');
  const [financiamento, setFinanciamento] = useState('');

  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [valor,seguro,licenca,documentos,manutencao,taxa,financiamento];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };
  const exibirDicas = () => {
    Alert.alert(
      'Dicas',
      'Antes de começar a procurar um veículo, determine quanto você pode pagar. Considere não apenas o preço do carro ou moto, mas também os custos de seguro, manutenção, combustível e possíveis reparos.',
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

          <Text style={styles.titulo}>Orçamento de Veiculo</Text>

              {/* Campos de entrada para os gastos */}
              <TextInput
                style={styles.input}
                placeholder="Valor do Veiculo"
                value={valor}
                onChangeText={(text) => setValor(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Seguro"
                value={seguro}
                onChangeText={(text) => setSeguro(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Licença do Veiculo"
                value={licenca}
                onChangeText={(text) => setLicenca(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Documentação e Taxas"
                value={documentos}
                onChangeText={(text) => setDocumentos(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Manutenção Inicial"
                value={manutencao}
                onChangeText={(text) => setManutencao(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Taxas do revendedor"
                value={taxa}
                onChangeText={(text) => setTaxa(text)}
                keyboardType="numeric"
              />
               <TextInput
                style={styles.input}
                placeholder="Financiamento"
                value={financiamento}
                onChangeText={(text) => setFinanciamento(text)}
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


