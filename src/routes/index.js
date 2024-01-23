import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, Feather} from '@expo/vector-icons';


import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Cadastro from '../pages/Cadastro';

//Pagina de dentro
import Home from '../pages/Home';
import New from '../pages/New';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import ButtonNew from '../pages/components/ButtonNew';
//Aqui faz a parte do Notification
import CadastroCasa from '../pages/Notification/casa/index';
import CadastroAlimentacao from '../pages/Notification/alimentacao/index';
import CadastroTransporte from '../pages/Notification/transporte/index';
import CadastrosaudeBeleza from '../pages/Notification/saudeBeleza/index';
import CadastroEducacao from '../pages/Notification/educacao/index';
import CadastroLazer from '../pages/Notification/lazer/index';
//aqui faz a parte do NEW
import QuizCasa from '../pages/New/NewCasa/index';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />

      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />

      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    
      <Stack.Screen name="CadastroCasa" component={CadastroCasa} options={{ headerShown: false }} />

      <Stack.Screen name="CadastroAlimentacao" component={CadastroAlimentacao} options={{ headerShown: false }} />

      <Stack.Screen name="CadastroTransporte" component={CadastroTransporte} options={{ headerShown: false }} />

      <Stack.Screen name="CadastrosaudeBeleza" component={CadastrosaudeBeleza} options={{ headerShown: false }} />

      <Stack.Screen name="CadastroEducacao" component={CadastroEducacao} options={{ headerShown: false }} />

      <Stack.Screen name="CadastroLazer" component={CadastroLazer} options={{ headerShown: false }} />

      {/* Aqui começa a parte do NEW */}
      
      <Stack.Screen name="QuizCasa" component={QuizCasa} options={{ headerShown: false }} />
      

    </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
    //O tabNavigator é responsavél pela barra onde fica os icones
    <Tab.Navigator
      screenOptions={{
      tabBarActiveTintColor: '#0fffc9',
      tabBarStyle: {
        display: 'flex',
        backgroundColor: '#38a69d',
        borderTopColor: 'transparent',
      },
      tabBarItemStyle: {
        paddingBottom: 8, //escrita
        paddingTop: 0.1, //icones
      },
    }}
  >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
        tabBarIcon: ({size, white}) => (
          <Entypo name="home" size={size} color={white}/>
        )
      }}/>

      <Tab.Screen 
        name="Projetos" 
        component={Search} 
        options={{
          tabBarIcon: ({size, white}) => (
            <Feather name="briefcase" size={size} color={white}/>
          )
        }}
        />

      <Tab.Screen  
        name="Novo" 
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, size }) => (
            <ButtonNew size={size} focused={focused}/>
          )
        }}
        />  

      <Tab.Screen 
        name="Orçamento" 
        component={Notification} 
        options={{
          tabBarIcon: ({size, white}) => (
            <Entypo name="wallet" size={size} color={white} />
    )
  }}
/>

      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({size, white}) => (
            <Feather name="user" size={size} color={white}/>
          )
        }}
        />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return <MainStack />;
}

//stack navigator chamado "MainStack" para as telas de boas-vindas, login e a navegação principal.
// O "MainStack" envolve o "MainTabs", que é o tab navigator contendo as telas "Home", "Search", "New", 
//"Notification" e "Profile".