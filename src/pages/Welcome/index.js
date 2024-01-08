import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable' //importação da animalçao

import {useNavigation} from '@react-navigation/native' //começamos a traçar a rota para navegação de pagina

export default function Welcome() {
    const navigation = useNavigation();

    return( 
        <View style={styles.container}> 
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}//caminho da imagem
                    style={{ width: '100%' }} //aqui passamos a dimeção em linha
                    resizeMode="contain" //pega o tamanho completo
                />
            </View>
            
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Inicie a sua jornada de conhecimento.</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Signin')}> 
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#1a4382',
        borderTopLeftRadius: 25, //arredonda os cantos
        borderTopRightRadius: 25,
        paddingStart: '5%', //faz o espaçamento
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color:'#DCDCDC',
    },
    text:{
        color:'#DCDCDC'
    },
    button:{
        position:'absolute',
        backgroundColor:'#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    }

})