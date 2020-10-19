import React, { Component } from 'react'
import ReactNativeAN from 'react-native-alarm-notification'
//import {NativeEventEmitter, NativeModules} 'react-native';
import AlarmaFirebase from '../AlarmDiary/AlarmaFirebase'


//Establece la fecha de inicio para 1 segundo a partir de ahora
const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000));
or
const fireDate='16-10-2020 00:00:00' 
//Se esta estableciendo la fecha exacta

const alarmaNotificador


class App extends Component{
    async method(){
        //Programar la alarma
        const alarm= await ReactNativeAN.scheduleAlarm({...alarNotifiData, fire_date: fireDate});
        console.log(alarm);
    }


}