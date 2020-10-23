import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
//import FormTratamiento from '../screens/Agenda/FormularioTratamiento';
import AgendaPrincipal from '../screens/Agenda/AgendaPrincipal';

const Stack = createStackNavigator();

export default function AgendaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
				name="agendaprincipal" 
				component={AgendaPrincipal} 
				options={{ title: "Agenda" }}/>
        </Stack.Navigator>
    )
}