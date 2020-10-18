import React from 'react';
import { View, StyleSheet, TextInput, Text, Picker } from 'react-native';


export default function AddTreatments() {
	
	const [titulo, setTitle] = React.useState('Titulo');
	const [desc, setDesc] = React.useState('Descripcion');
	
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
				style={styles.input}
				placeholder='Agrega una Descripcion'
				onChangeText={(val2) => setDesc(val2)}
			/>
			<Text>Tipo: </Text>

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
    
  });
