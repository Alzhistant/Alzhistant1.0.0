import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Picker, ScrollView } from 'react-native';
import { Button } from "react-native-elements";


export default function AddTreatments({ navigation }) {
	
	const [titulo, setTitle] = React.useState('Titulo');
	const [desc, setDesc] = React.useState('Descripcion');
	const [selectedValue, setSelectedValue] = useState("Medicamento");
	const [numTime, setTimeValue] = React.useState('Cada');
	
    return (
		<ScrollView style={styles.ScrollView}>
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
			<Text>Fin: </Text>
			<Text>Periodicidad: </Text>
			<TextInput 
				style={styles.input}
				keyboardType = 'numeric'
				placeholder='Cada'
				onChangeText={(val3) => setTitle(val3)}
			/>
			<Picker
				selectedValue={selectedValue}
				style={styles.input}
				onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item label="Horas" value="hrs" />
				<Picker.Item label="Días" value="dd" />
				<Picker.Item label="Meses" value="mm" />
			</Picker>
			<Button
                title="Confirmar Tratamiento"
                containerStyle={styles.btnContainer}
                onPress={() => {navigation.navigate('treatments')}}
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
