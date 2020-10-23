import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FormTratamiento from '../screens/Agenda/FormularioTratamiento';
import Agenda from '..\screens\Agenda\AgendaPrincipal.js';

const Stack = createStackNavigator();

export default function AgendaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="formtreatment" component={FormTratamiento} options={{ title: "Alzhistant" }}/>
        </Stack.Navigator>
    )
}