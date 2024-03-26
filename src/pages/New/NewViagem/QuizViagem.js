import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ScrollView,Alert,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 


export default function QuizViagem() {
  
  const [passagens, setPassagens] = useState('');
  const [acomodacao, setAcomodacao] = useState('');
  const [alimentacao, setAlimentacao] = useState('');
  const [passeio, setPasseio] = useState('');
  const [transporte, settransporte] = useState('');
  const [documentacao, setdocumentacao] = useState('');
  const [seguro, setSeguro] = useState('');
  const [emergencia, setEmergencia] = useState('');
  const [compras, setCompras] = useState('');
  const [outro, setOutro] = useState('');
  
  const navigation = useNavigation();

  const calcularTotal = () => {
    const valores = [passagens,acomodacao,alimentacao,passeio,transporte,documentacao,seguro,emergencia,compras,outro];
    const total = valores.reduce((acc, valor) => acc + parseFloat(valor || 0), 0);
    return total.toFixed(2);
  };
  const exibirDicas = () => {
    Alert.alert(
      'Dicas',
      'Destino e Duração: Escolha para onde quer ir e por quanto tempo, considerando clima, atrações e custo de vida.- Orçamento: Estabeleça um limite realista para gastos em passagens, hospedagem, alimentação, transporte e atividades.-Passagens e Hospedagem: Reserve passagens com antecedência para obter melhores preços e encontre acomodações que se encaixem no seu orçamento e preferências.-Itinerário: Liste as atrações que deseja visitar, considerando localização, custo e tempo necessário.-Seguro de Viagem: Proteja-se com um seguro que cubra despesas médicas, cancelamentos e emergências.-Documentos: Certifique-se de ter todos os documentos necessários, como passaporte, visto e carteira de vacinação.-Bagagem: Faça uma lista dos itens essenciais e organize suas malas com antecedência.-Transporte Local: Pesquise opções de transporte no destino e planeje seu deslocamento do aeroporto para o hotel e entre as atrações.-Contingências: Tenha um plano para lidar com imprevistos, como atrasos ou emergências médicas, e mantenha contato com pessoas em casa.',
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

            <Text style={styles.titulo}>Orçamento de uma Nova Viagem</Text>

                {/* Campos de entrada para os gastos */}
                <TextInput
                    style={styles.input}
                    placeholder="Passagens"
                    value={passagens}
                    onChangeText={(text) => setPassagens(text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Acomodações"
                    value={acomodacao}
                    onChangeText={(text) => setAcomodacao(text)}
                    keyboardType="numeric"
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Alimentação"
                    value={alimentacao}
                    onChangeText={(text) => setAlimentacao(text)}
                    keyboardType="numeric"
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Passeio"
                    value={passeio}
                    onChangeText={(text) => setPasseio(text)}
                    keyboardType="numeric"
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Transporte"
                    value={transporte}
                    onChangeText={(text) => settransporte(text)}
                    keyboardType="numeric"
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Documentações"
                    value={documentacao}
                    onChangeText={(text) => setdocumentacao(text)}
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
                    placeholder="Emergencias"
                    value={emergencia}
                    onChangeText={(text) => setEmergencia(text)}
                    keyboardType="numeric"
                />
                    <TextInput
                    style={styles.input}
                    placeholder="Compras"
                    value={compras}
                    onChangeText={(text) => setCompras(text)}
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


