import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import {Calendar, CalendarList, Agenda, LocaleConfig, calendarTheme} from 'react-native-calendars';
import Dia from '../Agenda/Dia';

//https://github.com/wix/react-native-calendars

export default function AgendaPrincipal( {navigation} ){
	LocaleConfig.locales['es'] = {
	  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul.','Ago','Sept','Oct','Nov','Dic'],
	  dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
	  dayNamesShort: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
	  today: 'Hoy\'hui'
	};
	LocaleConfig.defaultLocale = 'es';
	
	return (
		<Calendar
		  style={{
			borderWidth: 1,
			borderColor: 'gray',
			height: 350
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
		  onMonthChange={(month) => {console.log('month changed', month)}}
		  onDayPress={(day) => {navigation.navigate('dia', { name: day.day + " de " + day.month + " " + day.year})}}
		/>
	)
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