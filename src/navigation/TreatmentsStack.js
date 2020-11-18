import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Treatment from '../screens/Treatment/Treatment';
import AddTreatments from '../screens/Treatment/AddTreatments';
import ViewTreatments from '../screens/Treatment/ViewTreatments';


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
                component={AddTreatments}
                options={{ title: "Agregar Tratamientos" }}
            />
			
			<Stack.Screen
				name="viewtreatments"
				component={ViewTreatments}
				options={{title: "Tratamientos"}}
			/>
        </Stack.Navigator>
    )
}
