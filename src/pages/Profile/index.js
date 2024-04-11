import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Modal, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o FontAwesome
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import MonthlyExpensesChart from './MonthlyExpensesChart';

export default function Profile() {
  const [userImage, setUserImage] = useState(null);
  const [salary, setSalary] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [showSettingsModal, setShowSettingsModal] = useState(false); // Estado para controlar a exibição do modal de configurações
  const navigation = useNavigation(); // Obtenha o objeto de navegação

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

  const exibirDicas = () => {
    Alert.alert(
      'Dicas',
      'Aqui voce terá acesso a um balanceamento anual dos seus gastos',
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

  const handleSair = () => {
    // Navegue para a tela de login
    navigation.navigate('Welcome');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.dicasButton} onPress={exibirDicas}>
          <Text style={styles.dicasButtonText}>Atenção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton} onPress={() => setShowSettingsModal(true)}>
          <FontAwesome name="cog" size={24} color="black" />
        </TouchableOpacity>

        <Modal
          visible={showSettingsModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowSettingsModal(false)}
        >
          <TouchableWithoutFeedback onPress={() => setShowSettingsModal(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleSair}>
                  <Text style={styles.logoutButtonText}>Sair do APP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

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

          {/* Seção de despesas - DEVERÁ SER MODIFICADA PARA APARECER O TOTAL DE GASTOS LA DE NEW */}
          <View style={styles.expensesBox}>
            <Text style={styles.expensesText}>- R$1234,56</Text>
            <Text style={styles.monthText}>{currentMonth}</Text>
          </View>

          {/* Gráfico de despesas mensais */}
          <MonthlyExpensesChart />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dicasButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  dicasButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1, // Para garantir que o ícone da engrenagem fique sobreposto aos outros elementos
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: windowHeight * 0.8,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: -1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
  },
  expensesContainer: {
    backgroundColor: 'green',
    padding: 20,
    marginTop: 40,
    borderRadius: 10,
    width: '90%',
  },
  salaryInputContainer: {
    marginBottom: 50,
  },
  salaryInputLabel: {
    color: 'white',
    fontSize: 18,
  },
  salaryInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  currencySymbol: {
    color: 'white',
    fontSize: 18,
    marginRight: 5,
  },
  salaryInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    flex: 1,
    fontSize: 18,
  },
  expensesBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
