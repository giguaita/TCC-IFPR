import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importação do FontAwesome
import * as ImagePicker from 'expo-image-picker';

export default function Search() {
  const [images, setImages] = useState([null, null, null, null]);
  const [names, setNames] = useState(['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4']);
  const [editingIndex, setEditingIndex] = useState(null);

  const selectImage = async (index) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.cancelled) {
        const newImages = [...images];
        newImages[index] = result.uri;
        setImages(newImages);
      }
    } catch (error) {
      Alert.alert('Erro ao selecionar imagem', error.message);
    }
  };

  const handleEditName = (index) => {
    setEditingIndex(index);
  };

  const handleNameChange = (index, newName) => {
    const newNames = [...names];
    newNames[index] = newName;
    setNames(newNames);
    // Remover o índice de edição após pressionar "Enter" no teclado
    if (newName.includes('\n')) {
      setEditingIndex(null);
    }
  };

  const showTips = () => {
    Alert.alert(
      'Dicas',
      'Aqui você pode visualizar os projetos que criou em "Novos Projetos", pode adicionar fotos maravilhosas apenas clicando no circulo e para visualizar o projeto basta clicar no botão visualizar',
      [
        {
          text: 'OK',
          onPress: () => console.log('Dicas exibidas'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const handleViewProject = (index) => {
    console.log(`Visualizando projeto ${index + 1}`);
    // Aqui você pode adicionar a lógica para visualizar o projeto
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.tipsButton} onPress={showTips}>
            <Text style={styles.tipsButtonText}>Dicas</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            {[0, 1].map((index) => (
              <TouchableOpacity key={index} onPress={() => selectImage(index)}>
                <View style={styles.photoWrapper}>
                  <View style={styles.circle}>
                    {images[index] && <Image source={{ uri: images[index] }} style={styles.image} />}
                  </View>
                  <View style={styles.nameWrapper}>
                    {editingIndex === index ? (
                      <TextInput
                        style={[styles.input, { height: 40 }]} // Ajuste de altura
                        value={names[index]}
                        onChangeText={(text) => handleNameChange(index, text)}
                        onBlur={() => setEditingIndex(null)} // Remover o índice de edição quando perder o foco
                      />
                    ) : (
                      <>
                        <Text style={styles.name}>{names[index]}</Text>
                        <TouchableOpacity onPress={() => handleEditName(index)}>
                          <FontAwesome name="pencil" size={20} color="black" style={styles.editIcon} />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  <TouchableOpacity onPress={() => handleViewProject(index)}>
                    <Text style={styles.viewProject}>Visualizar</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {[2, 3].map((index) => (
              <TouchableOpacity key={index} onPress={() => selectImage(index)}>
                <View style={styles.photoWrapper}>
                  <View style={styles.circle}>
                    {images[index] && <Image source={{ uri: images[index] }} style={styles.image} />}
                  </View>
                  <View style={styles.nameWrapper}>
                    {editingIndex === index ? (
                      <TextInput
                        style={[styles.input, { height: 40 }]} // Ajuste de altura
                        value={names[index]}
                        onChangeText={(text) => handleNameChange(index, text)}
                        onBlur={() => setEditingIndex(null)} // Remover o índice de edição quando perder o foco
                      />
                    ) : (
                      <>
                        <Text style={styles.name}>{names[index]}</Text>
                        <TouchableOpacity onPress={() => handleEditName(index)}>
                          <FontAwesome name="pencil" size={20} color="black" style={styles.editIcon} />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  <TouchableOpacity onPress={() => handleViewProject(index)}>
                    <Text style={styles.viewProject}>Visualizar</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  tipsButton: {
    backgroundColor: '#FFA500', // Laranja
    padding: 10,
    borderRadius: 5,
    marginTop: -20,
    alignSelf: 'center',
    marginLeft: 1,
  },
  tipsButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photoWrapper: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nameWrapper: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Para alinhar o ícone ao lado do nome
  },
  name: {
    fontSize: 16,
    marginRight: 5, // Adicionando margem à direita para separar o ícone do nome
  },
  input: {
    fontSize: 16,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
    flex: 1, // Para ocupar todo o espaço disponível em largura
  },
  editIcon: {
    marginLeft: 5, // Adicionando margem à esquerda para separar o ícone do nome
  },
  viewProject: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
