import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
//carrosel de imagens
const slides = [
  {
    key: 1,
    title: 'Organize',
    text: 'Organize seus projetos de forma simples e prática de qualquer lugar.',
    image: require('./src/assets/organizar.png')
  },
  {
    key: 2,
    title: 'Planeje',
    text: 'Facilite seu planejamento e despeça-se das dívidas com praticidade.',
    image: require('./src/assets/planejar.png')
  },
  {
    key: 3,
    title: 'Aprenda',
    text: 'Desfrute de uma fonte rica de conhecimento sobre Educação Financeira à sua disposição.',
    image: require('./src/assets/aprender.png')
  },
  {
    key: 4,
    title: 'Conquiste',
    text: 'Com Planejamento e Conhecimento, transformamos sonhos em realidade.',
    image: require('./src/assets/conquistar.png')
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  slideText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  slideTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
});

function renderSlides({ item }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={item.image}
        style={{
          resizeMode: 'cover',
          height: '63%',
          width: '100%',
        }}
      />
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideText}>{item.text}</Text>
    </View>
  );
}
function IntroScreen() {
  const navigation = useNavigation();

  const ativarDone = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        onDone={ativarDone}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30,
        }}
      />
    </View>
  );
}
function HomeScreen() {
  return (
    <View  style={styles.container}>
      <Routes />
    </View>
  );
}

export default function App() {
  const [showHouse, setShowHouse] = useState(false);

  
  if (showHouse) {
    return (
      <View>
        <Text>ENTROU NA HOME</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}