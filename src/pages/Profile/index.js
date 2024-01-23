import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    // Solicitar permissão ao usuário para acessar a galeria de fotos
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão da câmera para fazer isso funcionar!');
      }
    })();
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
      <Text style={styles.text}>Perfil do Usuário</Text>

      <TouchableOpacity onPress={handleChooseImage} style={styles.imageContainer}>
        {userImage ? (
          <Image source={{ uri: userImage.uri }} style={styles.profileImage} />
        ) : (
          <Text style={styles.uploadText}>Clique para fazer o upload de uma imagem</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', // Mudei para flex-start
      alignItems: 'center',
    },
    header: {
      marginTop: 40, // Adicionado espaçamento superior para o cabeçalho
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    imageContainer: {
      marginTop: -5,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 75,
      marginTop: 10,
    },
    uploadText: {
      fontSize: 16,
      color: 'blue',
      marginTop: 10,
    },
  });
