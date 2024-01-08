import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function New(){
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.text}>Pagina de novos projetos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});