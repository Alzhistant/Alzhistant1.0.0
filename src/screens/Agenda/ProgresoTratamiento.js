import React, {useState, useEffect, useRef, useInterval} from 'react';
import { View, StyleSheet, Text, Dimensions, AppRegistry,Animated,ProgressBarAndroid, Button } from 'react-native';
import { CheckBox } from 'react-native-elements'

export default function ProgresoTratamiento({ route,navigation }){
  
    return(
      <View style = {styles.barraprogreso}>
        <View style = {styles.cardView}>
          <View style = {{flexDirection: 'column'}}>
            <CheckBox
                  center
                  title='Click Here to Remove This Item'
                  iconRight
                  iconType='material'
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='add'
                  checkedColor='red'/>
          </View>
        </View>
        <ProgressBarAndroid style = {styles.barraprogreso}
          styleAttr = 'Horizontal'
          indeterminate = {false}
          progress = {0.5}
          />
      </View>
    ) 
}


const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    inputForm: {
      width: '100%',
      marginTop: 20,
    },
    btnContainerLogin: {
      marginTop: 20,
      width: '95%',
    },
    btnLogin: {
      backgroundColor: '#00a680',
    },
    iconRight: {
      color: '#c1c1c1',
    },
    botonCirculo: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: '#2288DC',
        bottom:-60,
    },
    textoBoton: {
        color: 'white',
        marginTop: 9,
        marginLeft: 22,
        fontSize: 25,
    },
    progressBar: {
      height: 20,
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5
    },
    barraprogreso: {
      flex: 1,
      justifyContent: 'space-evenly',
      padding: 10
    },
    cardView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      shadowColor: "#000",
      marginHorizontal: 10,
      marginVertical: 5,
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
  }
  });