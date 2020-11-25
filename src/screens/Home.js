import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";

export default function Home( {navigation} ) {

    return (
        <View style={styles.formContainer}>
			<Button
				title="Agenda"
                containerStyle={styles.btnContainer}
				//onPress={() => {navigation.navigate('')}}
			/>
			<Button
				title="Guías"
                containerStyle={styles.btnContainer}
				//onPress={() => {navigation.navigate('')}}
			/>
			<Button
				title="Comunidad"
                containerStyle={styles.btnContainer}
				//onPress={() => {navigation.navigate('')}}
			/>
			<Button
				title="Sobre Nosotros"
                containerStyle={styles.btnContainer}
				//onPress={() => {navigation.navigate('')}}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
	btnContainer: {
      marginTop: 20,
      width: "80%",
    },
});