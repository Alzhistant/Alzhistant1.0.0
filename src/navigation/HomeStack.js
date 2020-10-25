import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AgendaPrincipal from '../screens/Agenda/AgendaPrincipal';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ title: "Alzhistant" }}/>
			
            <Stack.Screen 
				name="agendaprincipal" 
				component={AgendaPrincipal} 
				options={{ title: "Agenda" }}/>

        </Stack.Navigator>
    )
}
