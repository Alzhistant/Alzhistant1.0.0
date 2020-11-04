
import { Button } from 'react-native-elements'

import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
//import { database } from 'firebase';
//import alarma from '../Alarm/alarma'
import TratamientoClass from '../clasess/TratamientoClass';


//const data;

export default function Home() {
    
    const [tratamientos, setTratamientos] = useState(null);
        useEffect( () => {
        async function obtenerTratamientos(){
            const listaTratamientos = await TratamientoClass.obtenerListaTratamientos("8VnAyXfmKwljqS0O7NY1");
            //setTratamientos(listaTratamientos);
            this.tratamientos=listaTratamientos
        }
        obtenerTratamientos();


    }, [])

 
    /*
    data.forEach(tratamientos => {
        Object.entries(tratamientos).forEach(([key, value])=> {
            console.log(`${key} ${value}`);
        });
   });
   */
    
    for(const datos in this.tratamientos){
        console.log(`${datos}: ${tratamientos[datos].descripcion}`);
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



