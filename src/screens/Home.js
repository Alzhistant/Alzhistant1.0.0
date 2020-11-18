
import { Button } from 'react-native-elements'

import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
//import { database } from 'firebase';
//import alarma from '../Alarm/alarma'
import TratamientoClass from '../clasess/TratamientoClass';


export default function Home() {
    
    const [tratamientos, setTratamientos] = useState(null);
        useEffect( () => {
        async function obtenerTratamientos(){
            const listaTratamientos = await TratamientoClass.obtenerListaTratamientos("8VnAyXfmKwljqS0O7NY1");
            setTratamientos(listaTratamientos);
            //this.tratamientos=listaTratamientos
            setIsVisible(false);
        }
        obtenerTratamientos();


    }, [])

 

    //Esta tomando las variables de firebase asociado a un indice 0
    for(const datos in tratamientos){
        console.log(`${datos}: ${tratamientos[datos].descripcion}`);
        console.log(`${datos}: ${tratamientos[datos].fechaFin}`);
        console.log(`${datos}: ${tratamientos[datos].fechaInicio}`);
        console.log(`${datos}: ${tratamientos[datos].frecuencia}`);
        console.log(`${datos}: ${tratamientos[datos].intervalo}`);
        console.log(`${datos}: ${tratamientos[datos].tipo}`);
        console.log(`${datos}: ${tratamientos[datos].titulo}`);
    }
 
    
    //const onPress= () => {console.log(tratamientos)}
    /*
   data.forEach(tratamientos => {
        Object.entries(tratamientos).forEach(([key, value])=> {
            console.log(`${key} ${value}`);
        });
   });
   */



    return (
        <View>
            <Text>Home...</Text>
           
        </View>
    )
}

//<Button title='tratamiento' onPress={onPress}></Button>



