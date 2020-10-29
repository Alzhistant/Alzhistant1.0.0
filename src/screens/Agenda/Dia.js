import React, {useState, useEffect} from 'react';
import { StyleSheet,View, Text, YellowBox, FlatList} from 'react-native'
import { firebaseApp } from '../../utils/firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);
const user = firebase.auth().currentUser;


YellowBox.ignoreWarnings(["Setting a timer"]);
import ItemTask from '../../components/ItemTask'

export default function Dia({ navigation }) {
  const [ listTasks, setListTasks] = useState([])

  useEffect(() => {
    getTreatments()
  },[])

  const getTreatments = async() => {
    let list = [];
    console.log('-----------------------------------')
    const response = await db.collection('pacientes').doc('9m32Obtd8VfqKWljtogH').collection('Tratamientos').get()
          response.forEach( document => {
            
            let id = document.id
            let titulo = document.data().titulo
            let descripcion = document.data().descripcion
            let fechaFin = document.data().fechaFin
            let fechaInicio = document.data().fechaInicio
            let frecuencia = document.data().frecuencia
            let intervalo = document.data().intervalo
            let tipo = document.data().tipo
            let dosis = document.data().dosis
            let docum = {id,titulo,descripcion,fechaFin,fechaInicio,frecuencia,intervalo,tipo,dosis}
            list.push(docum)
          })

          setListTasks(list)
          console.log(list)
  }

  const renderTask = ({ item }) => (
    <ItemTask
      titulo = {item.titulo}
      descripcion = {item.descripcion}
      fechaInicio = {item.fechaInicio}
      fechaFin = {item.fechaFin}
      intervalo = {item.intervalo}
      frecuencia = {item.frecuencia}
      dosis = {item.dosis}
      tipo = {item.tipo}
    />
  )
    return (
        <View style={styles.formContainer}>
          <FlatList
            data = {listTasks}
            renderItem = {renderTask}
            keyExtractor = {item => item.id}
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
  });