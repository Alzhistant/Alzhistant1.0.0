import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";
import {Calendar, CalendarList, Agenda, LocaleConfig, calendarTheme} from 'react-native-calendars';

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
		  style={[styles.calendar, {height: 300}]}
		  onDayPress={(day) => {console.log('selected day', day)}}
		  onMonthChange={(month) => {console.log('month changed', month)}}
		  dayComponent={({date, state}) => {
			return (
			  <View>
				<Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>
				  {date.day}
				</Text>
			  </View>
			);
		  }}
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