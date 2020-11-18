import React, { useState } from 'react';
import { firebaseApp } from '../utils/firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";
import * as Notifier from './Notifier'

const db = firebase.firestore(firebaseApp);

const titleAlarm = "El paciente a salido del area segura!!"


export default function DistanciaCoordenadas(){
	db.collection('pacientes').doc('paciente-test').get()
	.then((response) => {
		const ubicacionPaciente = response.data().currentLocation;
		db.collection('pacientes').doc('paciente-test-area').get()
			.then((response) => {
				
				//Firestore: pacientes => paciente-test-area => SafeArea
				const puntoSeguro = response.data().safeArea;
				
				//Coordenadas del Paciente (pacientes => paciente-test => currentLocation).
				var lat1 = ubicacionPaciente.latitude;
				//console.log(lat1);
				var lon1 = ubicacionPaciente.longitude;
				//console.log(lon1);

				//Coordenadas centrales del Área Segura.
				var lat2 = puntoSeguro.latitude;
				//console.log(lat2);
				var lon2 = puntoSeguro.longitude;
				//console.log(lon2);

				var R = 6371e3; // radio de la tierra en metros
				var fi1 = lat1 * Math.PI/180; // cambio de valores (fi, lambda) en radianes
				var fi2 = lat2 * Math.PI/180;
				var Dfi = (lat2-lat1) * Math.PI/180;
				var Dlam = (lon2-lon1) * Math.PI/180;

				var a = Math.sin(Dfi/2) * Math.sin(Dfi/2) +
						Math.cos(fi1) * Math.cos(fi2) *
						Math.sin(Dlam/2) * Math.sin(Dlam/2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

				var d = R * c; // en metros
				
				console.log(d);
				
				// si esta dentro del area "segura"
			
				if(d>=puntoSeguro.distance){
					
					return d;
				}
				// si no esta en el area segura
				else
					Notifier.sendLocalNotification(titleAlarm);
					return d;
					
			});
	});
}