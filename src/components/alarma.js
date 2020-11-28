/*import React, {Component} from 'react';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	ToastAndroid,
	Platform,
	NativeEventEmitter,
	NativeModules,
} from 'react-native';

import { firebaseApp } from '../utils/firebase'; 
import ReactNativeAN from 'react-native-alarm-notification';
import firebase from 'firebase/app';
//import react from 'react'
import "firebase/storage";
import "firebase/firestore";
//import TratamientoClass from '../clasess/TratamientoClass';
import { Component } from 'react';
//import { View, Text } from "react-native";



const db = firebase.firestore(firebaseApp);



export default function obtenerDatosfire(){
	
    const [tratamientos, setTratamientos] = useState(null);
        useEffect( () => {

        async function obtenerTratamientos(){
            const listaTratamientos = await TratamientoClass.obtenerListaTratamientos("8VnAyXfmKwljqS0O7NY1");
			this.tratamientos= listaTratamientos
		}
        obtenerTratamientos();
		
		console.log(tratamientos)


	}, [])
	
	

}






export class AlarmaTratamiento extends Component{
	constructor(titulo,descripcion,tipo,frecuencia,fecha_inicio, hora_inicio){
		this.titulo=titulo,
		this.descripcion=descripcion,
		this.tipo=tipo,
		this.frecuencia=frecuencia,
		this.fecha_inicio=fecha_inicio,
		this.hora_inicio=hora_inicio
	}

	async metodos(){
		//Programar alarma futura
		const alarma= await ReactNativeAN.scheduleAlarm({...AlarmaTratamiento})
		//console.log(alarma); ==> id = 1
	
		//Parar la alarma
		//ReactNativeAN.stopAlarmSound();

		//Envia notificacion en instante
		//ReactNativeAN.sendNotification(AlarmaTratamiento);



	//}

//}


//const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));
//Establece la fecha para que la alarma se active

*/

import * as Notifier from './Notifier';

Notifier.sendLocalNotification("muestra notificacion");



