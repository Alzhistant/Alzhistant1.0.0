import React from 'react'
import { View, Text } from 'react-native'

export default function TreatmentView( { route, navigation } ) {
    const { tratamiento } = route.params;
    console.log("Hola");
    console.log(tratamiento);
    console.log("Chao");

    return (
        <View>
            <Text>Vista de Tratamientos</Text>
        </View>
    )
}
