import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselScreen from './Carousel';

export default function App() {
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('Usuário'); // Defina o nome do usuário

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting('Bom dia');
      } else if (currentHour >= 12 && currentHour < 19) {
        setGreeting('Boa tarde');
      } else {
        setGreeting('Boa noite');
      }
    };

    // Atualiza a saudação quando o componente é montado
    updateGreeting();

    // Atualiza a saudação a cada minuto (60 * 1000 milissegundos)
    const intervalId = setInterval(updateGreeting, 60 * 1000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seja Bem Vindo ao Alpha</Text>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.subTitle}>Esperamos que sua jornada seja ótima</Text>
      </View>
      <Text style={styles.greeting}>{greeting}</Text>
      <Text>Que maravilha você por aqui! O que acha de dar uma olhada nessas dicas fresquinhas?</Text>
      <CarouselScreen />
    </View>
  );
  //EXEMPLO
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20, // Aumentei o espaçamento para 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E84803', // Cor para o título
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Cor para o nome do usuário (preto)
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Cor para o subtítulo (preto)
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E84803', // Cor para saudação
    marginBottom: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});
