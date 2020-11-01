import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AgendaPrincipal from '../screens/Agenda/AgendaPrincipal';
import Dia from '../screens/Agenda/Dia';
import Pantalla from '../screens/Agenda/Pantalla';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ title: "Alzhistant" }}/>
			
            <Stack.Screen 
				name="agendaprincipal" 
				component={AgendaPrincipal} 
				options={{ title: "Agenda" }}
                />

            <Stack.Screen 
				name="dia" 
				component={Dia}
                options={({ route }) => ({ title: route.params.name })}
                />

            <Stack.Screen 
				name="pantalla" 
				component={Pantalla}
                options={{ title: "Pantalla" }}
                />

        </Stack.Navigator>
    )
}
