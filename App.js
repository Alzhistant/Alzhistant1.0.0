import React from 'react';
import { LogBox } from 'react-native';
import Logged from "./src/navigation/Account/Logged";
import { firebaseApp } from './src/utils/firebase';
import {decode, encode} from 'base-64';

import * as Notifier from './src/components/Notifier';
import * as Sentinel from './src/components/Sentinel';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';


const TASK_NAME = "BACKGROUND_TASK"

TaskManager.defineTask(TASK_NAME, () => {
  try {
    // fetch data here...
    //Notifier.sendLocalNotification("esto es una notificacion");
    //
    Sentinel.default();
    const receivedNewData = "Simulated fetch " + new Date()
    console.log("My task ", receivedNewData)
    return receivedNewData
      ? BackgroundFetch.Result.NewData
      : BackgroundFetch.Result.NoData
  } catch (err) {
    return BackgroundFetch.Result.Failed
  }
})

RegisterBackgroundTask = async () => {
  try {
    await BackgroundFetch.registerTaskAsync(TASK_NAME, {
      minimumInterval: 1, // minutos,
    })
    console.log("Task registered")
  } catch (err) {
    console.log("Task Register failed:", err)
  }
}

//-------------------------------------------------------------------------------------




// setInterval(function(){ console.log("Hello"); }, 3000);
// setInterval(function(){ console.log("Bye"); }, 1000);



export default function App() {
  Notifier.default();
  RegisterBackgroundTask();
  return <Logged />;
}
