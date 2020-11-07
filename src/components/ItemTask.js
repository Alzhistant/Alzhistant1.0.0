import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
//<Text style = {{ color: '#07B83A'}}>Fecha de Inicio: {Moment(props.fechaInicio).format('DD/MM/YYYY')}</Text>
//<Text style = {{ color: '#07B83A'}}>Fecha de Término: {Moment(props.fechaFin).format('DD/MM/YYYY')}</Text>


const ItemTask = (props) => {
    if(props.titulo){
        Moment.locale('es')
        console.log('Tiene')
        const navigation = useNavigation(); 
        return(
            <View style = {styles.cardView}>
            <View style = {{flexDirection: 'column'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('progresotratamiento',{name: props.titulo})}}>
                <Text style = {{ color: '#07B83A'}}>Nombre: {props.titulo} </Text>
                <Text style = {{ color: '#07B83A'}}>Descripción: {props.descripcion} </Text>
                <Text style = {{ color: '#07B83A'}}>Frecuencia: {props.dosis} cada {props.intervalo} {props.frecuencia}</Text>
                <Text style = {{ color: '#07B83A'}}>Tipo: {props.tipo} </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else{
        alert('Hola')
        return(
            <View style = {stylesheet.formContainer}>
                <Text> Hola</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        marginHorizontal: 10,
        marginVertical: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

const stylesheet = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    inputForm: {
      width: '100%',
      marginTop: 20,
    },
    btnContainerLogin: {
      marginTop: 20,
      width: '95%',
    },
    btnLogin: {
      backgroundColor: '#00a680',
    },
    iconRight: {
      color: '#c1c1c1',
    },
    botonCirculo: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: '#2288DC',
        bottom:-60,
    },
    textoBoton: {
        color: 'white',
        marginTop: 9,
        marginLeft: 22,
        fontSize: 25,
    },
  });

export default ItemTask;
