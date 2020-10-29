import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AgendaPrincipal from '../screens/Agenda/AgendaPrincipal';
import Dia from '../screens/Agenda/Dia';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ title: "Alzhistant" }}/>
			
            <Stack.Screen 
				name="agendaprincipal" 
				component={AgendaPrincipal} 
				options={{ title: "Agenda" }}/>

            <Stack.Screen 
				name="dia" 
				component={Dia}
                options={({ route }) => ({ title: route.params.name })}
                />

        </Stack.Navigator>
    )
}
