import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, YellowBox, Platform } from 'react-native';
import { Button } from "react-native-elements";
import {Calendar,CalendarList, Agenda, LocaleConfig, calendarTheme} from 'react-native-calendars';
import { firebaseApp } from '../../utils/firebase';
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";
import * as CalendarExpo from 'expo-calendar';
//https://github.com/wix/react-native-calendars
import Moment from 'moment'

const db = firebase.firestore(firebaseApp);
YellowBox.ignoreWarnings(["Setting a timer"])

export default function AgendaPrincipal( {navigation} ){
	var  meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
	LocaleConfig.locales['es'] = {
	  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul.','Ago','Sept','Oct','Nov','Dic'],
	  dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
	  dayNamesShort: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
	  today: 'Hoy\'hui'
	};
	LocaleConfig.defaultLocale = 'es';

	const [ listPacients, setListPacients] = useState([])
	const [ listTasks, setListTasks] = useState([])
	useEffect(() => {
		getPacients()
		Calendario()
	  },[])

	
	const Calendario = async() =>{
		const { status } = await CalendarExpo.requestCalendarPermissionsAsync();
		if (status === 'granted') {
			const calendars = await CalendarExpo.getCalendarsAsync();
			//console.log('Here are all your calendars:');
			//console.log({ calendars });
		}
	}
	
	const getPacients = async() =>{
		const user = firebase.auth().currentUser;
		console.log('UID usuario: ',user.uid)
		if (user) {
			//console.log('UID del usuario: ',user.uid)
			let pacients = [];
			const response = await db.collection('Clientes').doc(user.uid).collection('Pacientes').get()
			response.forEach( document => {
				let id = document.id
				let nombre = document.data().nombre
				var fechaNacimiento = new Date(document.data().birthDate.seconds * 1000)
				let pacientes = {id,nombre,fechaNacimiento}
				pacients.push(pacientes)			
				})
				setListPacients(pacients)
				getTreatments()

				
				//console.log(list)
		} 
		else {
			console.log("Nope")
		}
	}

	const getTreatments = async() => {
		var fecha = new Date(Moment(new Date(day.dateString)).add(3,'hours'))
		
		let tasks = [];
		const response = await db.collection('pacientes').doc(listPacients[0].id).collection('Tratamientos').get()
			  response.forEach( document => {
				let id = document.id
				var fechaInicio = new Date(document.data().fechaInicio.seconds * 1000)
				var fechaFin = new Date(document.data().fechaFin.seconds * 1000)
				let titulo = document.data().titulo
				let descripcion = document.data().descripcion
				let frecuencia = document.data().frecuencia
				let intervalo = document.data().intervalo
				let tipo = document.data().tipo
				let dosis = document.data().dosis
				let docum = {id,titulo,descripcion,fechaFin,fechaInicio,frecuencia,intervalo,tipo,dosis}
				tasks.push(docum)

			  })
			  setListTasks(tasks)
			  console.log(tasks)
	
	  }
	return (
		<View
      style={{
        borderWidth: 1,
			borderColor: 'gray',
			height: 350
      }}>

		<Calendar
			 markedDates={{
				'2020-11-20': {selected: true, endingDay: true, color: 'green', textColor: 'gray'}
			  }}
		  theme={{
			backgroundColor: '#ffffff',
			calendarBackground: '#ffffff',
			textSectionTitleColor: '#b6c1cd',
			textSectionTitleDisabledColor: '#d9e1e8',
			selectedDayBackgroundColor: '#00adf5',
			selectedDayTextColor: '#ffffff',
			todayTextColor: '#00adf5',
			dayTextColor: '#2d4150',
			textDisabledColor: '#d9e1e8',
			dotColor: '#00adf5',
			selectedDotColor: '#ffffff',
			arrowColor: 'orange',
			disabledArrowColor: '#d9e1e8',
			monthTextColor: 'blue',
			indicatorColor: 'blue',
			textDayFontFamily: 'monospace',
			textMonthFontFamily: 'monospace',
			textDayHeaderFontFamily: 'monospace',
			textDayFontWeight: '300',
			textMonthFontWeight: 'bold',
			textDayHeaderFontWeight: '300',
			textDayFontSize: 16,
			textMonthFontSize: 16,
			textDayHeaderFontSize: 16
		  }}
		  onMonthChange={(month) => {console.log(month)}}
		onDayPress={(day) => {navigation.navigate('dia', { name: day.day + " de " + meses[day.month-1] + " " + day.year,day,listPacients})}}
		/>
    </View>
	)
}

async function getDefaultCalendarSource() {
	const calendars = await CalendarExpo.getCalendarsAsync();
	const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
	return defaultCalendars[0].source;
  }

  async function createCalendar() {
	const defaultCalendarSource =
	  Platform.OS === 'android'
		? await getDefaultCalendarSource()
		: { isLocalAccount: true, name: 'Expo Calendar' };
	const newCalendarID = await CalendarExpo.createCalendarAsync({
	  title: 'Expo Calendar',
	  color: 'blue',
	  entityType: CalendarExpo.EntityTypes.EVENT,
	  sourceId: defaultCalendarSource.id,
	  source: defaultCalendarSource,
	  name: 'internalCalendarName',
	  ownerAccount: 'personal',
	  accessLevel: CalendarExpo.CalendarAccessLevel.OWNER,
	});
	console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
	btnContainer: {
      marginTop: 20,
      width: "80%",
    },
});