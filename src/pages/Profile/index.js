import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const [userImage, setUserImage] = useState(null);
  const [salary, setSalary] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    // Solicitar permissão ao usuário para acessar a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão da câmera para fazer isso funcionar!');
      }
    })();

    // Obter o nome do mês atual
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const currentDate = new Date();
    setCurrentMonth(monthNames[currentDate.getMonth()]);
  }, []);

  const handleChooseImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setUserImage(result);
      }
    } catch (error) {
      console.error('Erro ao escolher a imagem:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Perfil do Usuário</Text>

        <TouchableOpacity onPress={handleChooseImage} style={styles.imageContainer}>
          {userImage ? (
            <Image source={{ uri: userImage.uri }} style={styles.profileImage} />
          ) : (
            <Text style={styles.uploadText}>Clique para fazer o upload de uma imagem</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.expensesContainer}>
        <View style={styles.salaryInputContainer}>
          <Text style={styles.salaryInputLabel}>Salário do mês de {currentMonth}:</Text>
          <View style={styles.salaryInputBox}>
            <Text style={styles.currencySymbol}>R$</Text>
            <TextInput
              style={styles.salaryInput}
              placeholder="Digite seu salário"
              keyboardType="numeric"
              value={salary}
              onChangeText={(text) => setSalary(text)}
            />
          </View>
        </View>

        <View style={styles.expensesBox}>
          <Text style={styles.expensesText}>- R$1234,56</Text>
          <Text style={styles.monthText}>{currentMonth}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', // Alinha os itens no início do contêiner
      alignItems: 'center', // Alinha os itens no centro do contêiner
    },
    header: {
      marginTop: 50, // Espaçamento superior do cabeçalho
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    imageContainer: {
      marginTop: -1, // Ajuste fino da posição vertical da imagem de perfil
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50, // Metade da largura/altura para torná-lo circular
      marginTop: 10,
      alignSelf: 'center', // Centraliza a imagem horizontalmente
      marginBottom: 10, // Adiciona algum espaçamento abaixo da imagem se necessário
    },
    uploadText: {
      fontSize: 16,
      color: 'blue',
      marginTop: 10, // Espaçamento superior do texto de upload
    },
    expensesContainer: {
      backgroundColor: 'green', // Cor de fundo do contêiner de despesas
      padding: 20, // Preenchimento interno do contêiner de despesas
      marginTop: 40, // Espaçamento superior do contêiner de despesas
      borderRadius: 10, // Borda arredondada do contêiner de despesas
      width: '90%', // Largura do contêiner de despesas
    },
    salaryInputContainer: {
      marginBottom: 50, // Espaçamento inferior do contêiner de entrada de salário
    },
    salaryInputLabel: {
      color: 'white',
      fontSize: 18,
    },
    salaryInputBox: {
      flexDirection: 'row', // Disposição em linha para rótulo e entrada
      alignItems: 'center', // Alinha os itens no centro horizontalmente
      marginTop: 5,
    },
    currencySymbol: {
      color: 'white',
      fontSize: 18,
      marginRight: 5, // Espaçamento à direita do símbolo de moeda
    },
    salaryInput: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 5,
      flex: 1, // Preenche o restante do espaço disponível
      fontSize: 18,
    },
    expensesBox: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Distribui os itens uniformemente ao longo do eixo principal
      alignItems: 'center',
    },
    expensesText: {
      color: 'white',
      fontSize: 18,
    },
    monthText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
