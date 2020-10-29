import * as React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { firebaseApp } from '../../utils/firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function Treatment({ navigation }) {
  db.collection('pacientes').doc('JcwUTs9EugWS6cbE7TbR').collection('Tratamientos').doc('0dn5TEnRT4YSSGE1kG7N').get() /**/
  .then((response) => {
    const tratamiento = response.data()
    console.log(tratamiento)
    console.log(tratamiento.detalle,tratamiento.finaliza,tratamiento.frecuencia,tratamiento.inicio,tratamiento.titulo);
  })
    return (
        <View style={styles.formContainer}>
            
    <Text > Pantalla de Tratamientos</Text>
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
  });