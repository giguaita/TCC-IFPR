import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
    const navigation = useNavigation();
  
    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError("E-mail inválido");
        return false;
      }
      setEmailError("");
      return true;
    };
  
    const validatePassword = () => {
      if (password.length < 6) {
        setPasswordError("A senha deve conter no mínimo 6 caracteres");
        return false;
      }
      setPasswordError("");
      return true;
    };
  
    const validateConfirmPassword = () => {
      if (password !== confirmPassword) {
        setConfirmPasswordError("As senhas não coincidem");
        return false;
      }
      setConfirmPasswordError("");
      return true;
    };
  
    const handleRegister = () => {
      if (validateEmail() && validatePassword() && validateConfirmPassword()) {
        // Realizar o cadastro
        navigation.navigate('Signin'); // Navegar para a tela de sucesso ou outra tela desejada após o cadastro
      }
    };
  
    return( 
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Cadastro de usuário</Text>
        </Animatable.View>  
  
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.title}>E-mail</Text>
          <TextInput
            placeholder="Digite seu e-mail..."
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
  
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha..."
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
  
          <Text style={styles.title}>Confirmar senha</Text>
          <TextInput
            placeholder="Digite novamente sua senha..."
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
  
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
  
      </View>
    );
  } 

//Aqui o container ele engloba toda a tela
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d',
        
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#DCDCDC'
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
        fontSize: 20,
        marginTop: 28,
        color:'#DCDCDC',
        
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center' 
    },
    registerText:{
        color: '#DCDCDC'
    }
    
})