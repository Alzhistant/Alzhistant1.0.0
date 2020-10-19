import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Picker } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";


export default function AddTreatments() {
	
	const [titulo, setTitle] = React.useState('Titulo');
	const [desc, setDesc] = React.useState('Descripcion');
	const [selectedValue, setSelectedValue] = useState("Medicamento");
	
    return (
		<View style={styles.formContainer}>
			<Text>Titulo: </Text>
			<TextInput 
				style={styles.input}
				placeholder='Agrega un Título'
				onChangeText={(val) => setTitle(val)}
			/>
			<Text>Descripcion: </Text>
			<TextInput 
				style={styles.input2}
				placeholder='Agrega una Descripcion'
				onChangeText={(val2) => setDesc(val2)}
			/>
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
			<Text>Inicio: </Text>
			

		</View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
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
    
  });
