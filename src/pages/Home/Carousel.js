import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = 300;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;

const carouselItems = [
  {
    imageUrl: require('../Home/imagens/divida.png'),
    tip: 'Imagine que suas finanças são como um cofrinho mágico. Às vezes, muitas moedinhas aparecem lá dentro, e é preciso cuidar delas para que tudo fique bem. Aqui vão alguns passos para entender melhor como cuidar desse cofrinho:\n\nPrimeiro, é importante contar todas as moedinhas que estão lá dentro. Isso significa olhar para as coisas que você deve ou para as despesas que tem.\n\nDepois, pense em quanto você ganha de moedinhas por mês, como uma mesada ou salário. É como se fosse a entrada de moedinhas no seu cofrinho.\n\nAgora, você precisa fazer um plano para suas moedinhas. Quanto vai guardar para coisas importantes, como estudos e comida? É como fazer um plano para não gastar todas as moedinhas de uma vez.\n\nLembre-se de gastar suas moedinhas com sabedoria. Evite usar tudo de uma vez em coisas que não são tão importantes. Priorize o que realmente importa.\n\nSe sobrarem moedinhas, que tal guardar algumas em um cofrinho especial? Isso seria como uma reserva de emergência para quando precisar de algo inesperado. Como troca de emprego, algum acidente ou se alguém ficar doente.\n\nE, por fim, nunca deixe de aprender sobre como cuidar das suas moedinhas. Converse sobre isso.',
  },
  {
    imageUrl: require('../Home/imagens/planejar.png'),
    tip: 'Defina metas financeiras realizáveis e alinhadas às suas necessidades. Pode ser quitar dívidas, poupar um valor todo mês, planejar uma viagem ou realizar uma compra.\n\nÉ crucial estabelecer prazos realistas para alcançar essas metas. Transformar seus sonhos em realidade exige trazê-los para a rotina diária.\n\nMesmo projetos grandiosos podem ser alcançados dando passos gradualmente, ajustando seu orçamento desde já.',
  },
  {
    imageUrl: require('../Home/imagens/corte.png'),
  tip: 'Em determinado momento, manter as finanças em ordem pode demandar algum tipo de esforço. O primeiro passo é eliminar gastos considerados dispensáveis.\n\nContudo, como distinguir o que é realmente importante?\n\nRevisite sua planilha de gastos e classifique cada item como de alta, média ou baixa necessidade. Aquele lanche todo final de semana ou o almoço semanal fora de casa podem não ser tão essenciais no momento.\n\nNão é necessário cortar tudo de uma vez e se privar do que gosta imediatamente. Contudo, é fundamental evitar um consumo desenfreado, reduzir despesas onde possível e escolher conscientemente o que pode ser temporariamente deixado de lado.'
  },
  {
    imageUrl: require('../Home/imagens/reserva.png'),
    tip: 'Depois de entender como estão suas finanças, cortar gastos e pagar as dívidas, é hora de criar uma reserva de emergência.\n\nEssa reserva serve para te ajudar em momentos inesperados ou situações urgentes que podem surgir a qualquer momento.\n\nTer uma quantia guardada é uma ótima maneira de manter seu padrão de vida sem precisar pedir empréstimos ou contrair novas dívidas se algo acontecer fora do planejado.\n\nNormalmente, recomenda-se ter guardado algo entre 6 meses e 1 ano do total dos seus gastos mensais.\n\nEsse dinheiro deve ficar preferencialmente em um investimento de baixo risco e alta liquidez, como a poupança.'
  }, 
{
  imageUrl: require('../Home/imagens/duvida.png'),
  tip: 'Dica para Iniciar sua Reserva de Emergência:\n\nUma dica fácil para começar sua reserva de emergência é seguir o método dos "pequenos passos". Defina um valor pequeno e alcançável que você pode separar mensalmente para a reserva. Pode ser algo como 5% do seu salário ou uma quantia fixa, mesmo que seja modesta.\n\nAutomatize esse processo, se possível, configurando uma transferência automática para uma conta separada assim que receber seu salário. Isso torna mais fácil e consistente poupar para a reserva, sem a tentação de gastar o dinheiro antes.\n\nExemplos para quem Ganha um Salário Mínimo de R$ 1.412:\n\n1. Percentual do Salário:\n   - Seu salário mensal: R$ 1.412\n   - Comprometa-se a reservar 5%: R$ 70,60 por mês para a sua reserva de emergência.\n\n2. Quantia Fixa:\n   - Estabeleça um valor fixo: R$ 30 por mês, por exemplo, independentemente do seu salário.\n\n3. Transferência Automática:\n   - Configure uma transferência automática: Assim que receber seu salário, programe uma transferência automática de R$ 50 para sua conta de reserva.\n\nEsses são exemplos mais modestos, adequados para quem está começando com um salário mínimo. O importante é adaptar esses valores conforme sua realidade financeira e ir aumentando gradualmente à medida que for possível. O essencial é começar a construir sua reserva de emergência.'
}
  
];

const CarouselScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => alert(item.tip)}>
      <View style={styles.carouselItemContainer}>
        <Image source={item.imageUrl} style={styles.carouselImage} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 50,
    right: 0,
    marginBottom: 60,
  },
  carouselItemContainer: {
    width: ITEM_WIDTH,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default CarouselScreen;
