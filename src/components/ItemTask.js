import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

Moment.locale('es')

const ItemTask = (props) => {
    if(!props.titulo){
        console.log('Entra')
        return(
            <View style = {styles.cardView}>
            <View style = {{flexDirection: 'column'}}>
                <TouchableOpacity onPress={() => console.log(props)}>
                <Text style = {{ color: '#07B83A'}}>Nombre</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
    else{
        console.log('else')
        return(
            <View style = {styles.cardView}>
            <View style = {{flexDirection: 'column'}}>
                <TouchableOpacity onPress={() => console.log(props)}>
                <Text style = {{ color: '#07B83A'}}>Nombre: {props.titulo} </Text>
                <Text style = {{ color: '#07B83A'}}>Descripción: {props.descripcion} </Text>
                <Text style = {{ color: '#07B83A'}}>Fecha de Inicio: {Moment(props.fechaInicio).format('LL')}</Text>
                <Text style = {{ color: '#07B83A'}}>Fecha de Término: {Moment(props.fechaFin).format('LL')}</Text>
                <Text style = {{ color: '#07B83A'}}>Frecuencia: {props.dosis} cada {props.intervalo} {props.frecuencia}</Text>
                <Text style = {{ color: '#07B83A'}}>Tipo: {props.tipo} </Text>
                </TouchableOpacity>
            </View>
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

export default ItemTask;
