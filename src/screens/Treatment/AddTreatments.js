import React, { useState } from 'react';
import { 
	View, StyleSheet, 
	TextInput, Text, 
	Picker, ScrollView, 
	Alert, Button
} from 'react-native';

import moment from 'moment';

//Librerías para el pickers de fecha y hora
import DateTimePicker from "react-native-modal-datetime-picker";

//Conexión con las librerias de nuestra base de datos en firebase/firestore
import { firebaseApp } from '../../utils/firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function AddTreatments({ navigation }) {

	//Título y Descripción
	const [titulo, setTitle] = React.useState('Titulo');
	const [desc, setDesc] = React.useState('Descripción');

	//Tipo de tratamiento
	const [tipo, setSelectedValue] = useState("Medicamento");

	//Frecuencia del tratamiento
	const [numTime, setTimeValue] = React.useState('Cada');
	const [tiempo, setSelectedValue2] = React.useState("Horas");

	//Variables para las fechas y horas	
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
	
	
    const handleConfirm = (date) => {
      //console.warn("Una Fecha ha sido seleccionada ", date);
	  console.log("Fecha de inicio ha sido seleccionada ", moment(date).format('DD/MM/YYYY').toString());
	  this.fecha_i = moment(date).format('DD/MM/YYYY').toString();
	  this.hora_i = moment(date).format('HH:MM').toString();
	  //this.fecha_inicio = this.fecha_inicio.bind(this);
	  
	  
      hideDatePicker();
    };
	/*var fecha_inicio = this.fecha_i;
	var hora_inicio = this.hora_i;
	console.log("Fecha y hora de inicio: ", fecha_inicio," ",hora_inicio);*/
	
	const handleConfirm2 = (date) => {
      //console.warn("Una Fecha ha sido seleccionada ", date);
	  console.log("Fecha final ha sido seleccionada ", moment(date).format('DD/MM/YYYY').toString());
	  this.fecha_f = moment(date).format('DD/MM/YYYY').toString();
	  this.hora_f = moment(date).format('HH:MM')
	  //this.fecha_inicio = this.fecha_inicio.bind(this);
	  
	  
      hideDatePicker();
    };
	//const fecha_final = this.fecha_f;
	//const hora_final = this.hora_f;
	
	//Variable para firestore
	const [isVisible, setIsVisible] = useState(false);

    return (
		//Formulario con Título, Descripción, Tipo de Tratamiento, 
		//Fecha/Hora de inicio y final del tratamiento, Frecuencia
		//y botón de doble confirmación
		<ScrollView style={styles.ScrollView}>
		<View style={styles.formContainer}>
			<Text>Titulo: </Text>
			<TextInput 
				style={styles.input}
				placeholder='Agrega un Título'
				onChangeText={(titulo) => setTitle(titulo)}
			/>

			<Text>Descripción: </Text>
			<TextInput 
				style={styles.input2}
				placeholder='Agrega una Descripción'
				onChangeText={(desc) => setDesc(desc)}
			/>

			<Text>Tipo: </Text>
			<Picker
				tipo={tipo}
				style={styles.input}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Medicamento" value="medicamento" />
				<Picker.Item label="Ejercicio Físico" value="ejercicio" />
				<Picker.Item label="Estimulación de Memoria" value="estimulacion" />
			</Picker>

			<Button title="Fecha Inicio Tratamiento" onPress={showDatePicker} />
			  <DateTimePicker
				isVisible={isDatePickerVisible}
				mode="datetime"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			  />

			<Text></Text>

			<Button title="Fecha Fin Tratamiento" onPress={showDatePicker} />
			  <DateTimePicker
				isVisible={isDatePickerVisible}
				mode="datetime"
				onConfirm={handleConfirm2}
				onCancel={hideDatePicker}
			  />

			<Text></Text>

			<Text>Frecuencia: </Text>
			<TextInput 
				style={styles.input}
				keyboardType = 'numeric'
				placeholder='Cada'
				onChangeText={(numTime) => setTimeValue(numTime)}
			/>
			<Picker
				tiempo={tiempo}
				style={styles.input}
				onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
			>
				<Picker.Item label="Horas" value="hrs" />
				<Picker.Item label="Días" value="dd" />
				<Picker.Item label="Meses" value="mm" />
			</Picker>

			<Button
                title="Confirmar Tratamiento"
                containerStyle={styles.btnContainer}
                onPress={() => {
						  Alert.alert(
						  'Confirmación:',
						  '¿Desea confirmar el tratamiento?',
						  [
							{ text: 'Si', 
							  onPress: () => { 
								setIsVisible(true);
								try {
								  db.collection("pacientes").doc("8VnAyXfmKwljqS0O7NY1").collection("Tratamientos").add({
									//Conexión de variables con la base de datos
									Tratamiento: {
									  titulo: titulo,
									  descripcion: desc,
									  tipo: tipo,
									  frecuencia: numTime,
									  frecuencia_tipo: tiempo,
									  //fecha_inicio: this.fecha_i,
									  //hora_inicio: this.hora_i,
									  //hora_final: hora_final,
									  //fecha_final: fecha_final
									}
								  })
								  console.log("Datos confirmados");
								  setIsVisible(false);
								} catch (error) {
								  setIsVisible(false);
								  console.log("Error al subir los datos")
								}
								navigation.navigate('treatments')
							  }
							},
							{
							  text: 'No',
							  onPress: () => console.log('Tratamiento cancelado'),
							  style: 'cancel'
							}
						  ],
						  { cancelable: false }
						);
					}
				}
            />

			<Text></Text>

		</View>
		</ScrollView>
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
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
	},
	input2: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
		height: 75,
	},
	scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
	},
});