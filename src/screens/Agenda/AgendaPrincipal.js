import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

export default function AgendaPrincipal( {navigation} ){
	LocaleConfig.locales['es'] = {
	  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	  monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul.','Ago','Sept','Oct','Nov','Dic'],
	  dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
	  dayNamesShort: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
	  today: 'Hoy\'hui'
	};
	const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
	const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
	const workout = {key:'workout', color: 'green'};

	LocaleConfig.defaultLocale = 'es';
	return (
		<Calendar
			  // Initially visible month. Default = Date()
			  current={'2012-03-01'}
			  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
			  minDate={'2012-05-10'}
			  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
			  maxDate={'2012-05-30'}
			  // Handler which gets executed on day press. Default = undefined
			  onDayPress={(day) => {console.log('selected day', day)}}
			  // Handler which gets executed on day long press. Default = undefined
			  onDayLongPress={(day) => {console.log('selected day', day)}}
			  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
			  monthFormat={'yyyy MM'}
			  // Handler which gets executed when visible month changes in calendar. Default = undefined
			  onMonthChange={(month) => {console.log('month changed', month)}}
			  // Hide month navigation arrows. Default = false
			  hideArrows={true}
			  // Replace default arrows with custom ones (direction can be 'left' or 'right')
			  renderArrow={(direction) => (<Arrow/>)}
			  // Do not show days of other months in month page. Default = false
			  hideExtraDays={true}
			  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
			  // day from another month that is visible in calendar page. Default = false
			  disableMonthChange={true}
			  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
			  firstDay={1}
			  // Hide day names. Default = false
			  hideDayNames={true}
			  // Show week numbers to the left. Default = false
			  showWeekNumbers={true}
			  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
			  onPressArrowLeft={subtractMonth => subtractMonth()}
			  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
			  onPressArrowRight={addMonth => addMonth()}
			  // Disable left arrow. Default = false
			  disableArrowLeft={true}
			  // Disable right arrow. Default = false
			  disableArrowRight={true}
			  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
			  disableAllTouchEventsForDisabledDays={true}
			  // Replace default month and year title with custom one. the function receive a date as parameter.
			  renderHeader={(date) => {/*Return JSX*/}}
			  // Enable the option to swipe between months. Default = false
			  enableSwipeMonths={true}
			  markedDates={{
				'2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
				'2012-05-17': {marked: true},
				'2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
				'2012-05-19': {disabled: true, disableTouchEvent: true},
				'2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
				'2017-10-26': {dots: [massage, workout], disabled: true}
			  }}
			  markingType={'multi-dot'}
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