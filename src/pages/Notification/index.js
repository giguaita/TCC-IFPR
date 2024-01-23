import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Notification() {
  // Estado para armazenar o total de gastos
  const [totalGastos, setTotalGastos] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const navigation = useNavigation();

  // Função chamada quando o ícone de interrogação é clicado
  const handleInfoClick = () => {
    console.log('Ícone de interrogação clicado!');
    setShowInfo(!showInfo); // Alterna o estado de exibição do texto de informação
  };

  // Funções para lidar com o clique em diferentes botões
  const abrirCadastroCasa = () => {
    console.log('Lógica específica para o botão Casa');
    navigation.navigate('CadastroCasa');
  };

  const abrirCadastroAlimentacao = () => {
    console.log('Lógica específica para o botão Alimentação');
    navigation.navigate('CadastroAlimentacao');
  };

  const abrirCadastroTransporte = () => {
    console.log('Lógica específica para o botão Transporte');
    navigation.navigate('CadastroTransporte');
  };

  const abrirCadastrosaudeBeleza = () => {
    console.log('Lógica específica para o botão SaudeBeleza');
    navigation.navigate('CadastrosaudeBeleza');
  };

  const abrirCadastroEducacao = () => {
    console.log('Lógica específica para o botão Educação');
    navigation.navigate('CadastroEducacao');
  };

  const abrirCadastroLazer = () => {
    console.log('Lógica específica para o botão Lazer');
    navigation.navigate('CadastroLazer');
  };

  return (
    <View style={styles.container}>
      {/* Ícone de interrogação no canto superior esquerdo */}
      <TouchableOpacity style={styles.infoButton} onPress={handleInfoClick}>
         <Text style={styles.infoButtonText}>?</Text>
      </TouchableOpacity>

       {/* Exibe o texto de informação quando showInfo for verdadeiro */}
       {showInfo && (
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            Adcicione abaixo seus gastos mensais, lembrando que caso algo não faça parte de seus gastos apenas deixe em branco.
          </Text>
        </View>
      )}

      {/* Símbolo de dinheiro */}
      <Text style={styles.moneySymbol}>$</Text>

      {/* Título "Controle de Gastos" */}
      <Text style={styles.text}>Controle de Gastos</Text>

      {/* Botões para os tipos de gastos */}
      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroCasa()}>
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

      {/* Botões para os outros tipos de gastos */}
      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroAlimentacao()}>
        <Text style={styles.buttonText}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroTransporte()}>
        <Text style={styles.buttonText}>Transporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirCadastrosaudeBeleza()}>
        <Text style={styles.buttonText}>Saúde & Beleza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroEducacao()}>
        <Text style={styles.buttonText}>Educação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => abrirCadastroLazer()}>
        <Text style={styles.buttonText}>Lazer & Extras</Text>
      </TouchableOpacity>

      {/* Exibe o total de gastos na interface */}
      <Text style={styles.contador}>Total de Gastos: R$ {totalGastos.toFixed(2)}</Text>
    </View>
  );
}

// Estilos CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneySymbol: {
    fontSize: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#03BB85',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginBottom: 10,
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
  infoButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
    padding: 15, // Ajuste o tamanho conforme necessário
  },
  infoButtonText: {
    color: 'black',
    fontSize: 24, // Ajuste o tamanho conforme necessário
  },
});
