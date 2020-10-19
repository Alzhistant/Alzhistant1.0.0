import React, { useState } from 'react';
import { 
	View, StyleSheet, TextInput, Text, Picker, ScrollView, 
	Alert, Button  } from 'react-native';

//Librerías para el pickers de fecha y hora
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimePicker from 'react-native-simple-time-picker';

//Conección con las librerias de nuestra base de datos en firebase/firestore
import { firebaseApp } from '../utils/firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function AddTreatments({ navigation }) {
	
	//Título y Descripción del tratamiento
	const [titulo, setTitle] = React.useState('Titulo');
	const [desc, setDesc] = React.useState('Descripcion');
	
	//Tipo de tratamiento
	const [selectedValue, setSelectedValue] = useState("Medicamento");
	
	//Periodicidad del tratamiento
	const [numTime, setTimeValue] = React.useState('Cada');
	
	//Variables pra las fechas de inicio y final del tratamiento
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
      console.warn("Una Fecha ha sido seleccionada ", date);
      hideDatePicker();
    };
	
	//Variables de las horas
	const [selectedHours, selectedMinutes] = React.useState('Hora Inicio Tratamiento');
	const [selectedHours2, selectedMinutes2] = React.useState('Hora Fin Tratamiento');
	
    return (
		<ScrollView style={styles.ScrollView}>
		<View style={styles.formContainer}>
		
			//Título
			<Text>Titulo: </Text>
			<TextInput 
				style={styles.input}
				placeholder='Agrega un Título'
				onChangeText={(val) => setTitle(val)}
			/>
			
			//Descripción
			<Text>Descripcion: </Text>
			<TextInput 
				style={styles.input2}
				placeholder='Agrega una Descripcion'
				onChangeText={(val2) => setDesc(val2)}
			/>
			
			//Tipo de tratamiento
			<Text>Tipo: </Text>
			<Picker
				selectedValue={selectedValue}
				style={styles.input}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Medicamento" value="medicamento" />
				<Picker.Item label="Ejercicio Físico" value="ejercicio" />
				<Picker.Item label="Estimulación de Memoria" value="estimulacion" />
			</Picker>
			
			//Fecha de Inicio del tratamiento
			<Button title="Fecha Inicio Tratamiento" onPress={showDatePicker} />
			  <DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			  />
			//Hora de la fecha de inicio del tratamiento
			<Text>{selectedHours}:{selectedMinutes}</Text>
			<TimePicker
			  selectedHours={selectedHours}
			  selectedMinutes={selectedMinutes}
			  onChange={(hours) => selectedHours}
			  onChange={(minutes) => selectedMinutes}
			/>
			
			//Fecha de Término del tratamiento
			<Button title="Fecha Fin Tratamiento" onPress={showDatePicker} />
			  <DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			  />
			//Hora de la fecha de termino del tratamiento
			<Text>{selectedHours2}:{selectedMinutes2}</Text>
			<TimePicker
			  selectedHours2={selectedHours2}
			  selectedMinutes2={selectedMinutes2}
			  onChange={(hours) => selectedHours2}
			  onChange={(minutes) => selectedMinutes2}
			/>
			
			//Periodicidad del tratamiento (cada cuanto se hace la actividad del tratamiento)
			<Text>Periodicidad: </Text>
			//Cantidad númerica de horas, días o meses
			<TextInput 
				style={styles.input}
				keyboardType = 'numeric'
				placeholder='Cada'
				onChangeText={(val3) => setTitle(val3)}
			/>
			//Si se hace efectivamente en un intervalo de horas, días o meses
			<Picker
				selectedValue={selectedValue}
				style={styles.input}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Horas" value="hrs" />
				<Picker.Item label="Días" value="dd" />
				<Picker.Item label="Meses" value="mm" />
			</Picker>
			
			//Botones de doble confirmación del tratamiento una vez llenado el formulario
			<Button
                title="Confirmar Tratamiento"
                containerStyle={styles.btnContainer}
                onPress={() => {Alert.alert(
				  'Confirmación:',
				  '¿Desea confirmar el tratamiento?',
				  [
					{ text: 'Si', onPress: () => navigation.navigate('treatments') },
					{
					  text: 'No',
					  onPress: () => console.log('Tratamiento cancelado'),
					  style: 'cancel'
					}
					
				  ],
				  { cancelable: false }
				);}
				}
            />
			
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
