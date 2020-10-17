import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function AddTreatment() {
	
	const [value, onChangeText] = React.useState('Titulo');
	
    return (
        <TextInput
		  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
		  onChangeText={text => onChangeText(text)}
		  value={value}
		/>
		
    )
}
