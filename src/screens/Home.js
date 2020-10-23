import React from 'react'
import { StyleSheet, View,Text,TouchableOpacity,Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.formContainer}>
        {/*<Button
            title='AGENDA'
            containerStyle={styles.btnContainerLogin}
            buttonStyle={styles.btnLogin}
            onPress={() => navigation.navigate('agenda')}
        />*/}

        
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
  });