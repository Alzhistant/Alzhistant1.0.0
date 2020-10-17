import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Treatment from '../screens/Treatment/Treatment';
import AddTreatment from '../screens/Treatment/AddTreatment';


const Stack = createStackNavigator();

export default function TreatmentsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="treatments"
                component={Treatment}
                options={{ title: "Tratamientos" }}
            />

            <Stack.Screen 
                name="addtreatments"
                component={AddTreatment}
                options={{ title: "Agregar Tratamientos" }}
            />
			
			<Stack.Screen
				name="viewtreatments"
				component={ViewTreatment}
				options={{title: "Tratamientos"}}
			/>
        </Stack.Navigator>
    )
}
