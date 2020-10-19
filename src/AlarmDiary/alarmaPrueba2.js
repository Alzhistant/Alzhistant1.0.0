import React, {Component} from 'react';
import {View, Text, Buttom, TextInput, StyletSheet, ToastAndroid, Platform, NativeEventEmitter, NativeModules,} from 'react-native';
/* La API ToastAndroid de React Native expone el módulo ToastAndroid de la plataforma Android como un 
módulo JS. Proporciona el método que toma los siguientes parámetros:show(message, duration)
-------mensaje Una cadena con el texto para brindar
-------duración La duración del 'Toast', ya sea o ToastAndroid.SHORTToastAndroid.LONG*/
import ReactNativeAN from 'react-native-alarm-notification';

const {RNAlarmNotification} = NativeModules;
const auxEmisor = new NativeEventEmitter(RNAlarmNotification);

const alarmaNotificador= {
    
}


render() {
    const {update, fireDate, futureFireDate, alarmId} = this.state;
    return (
        <View style={styles.wrapper}>
            <View>
                <View>
                    <Text>Alarm Date in the future (example 01-01-2022 00:00:00)</Text>
                    <View>
                        <TextInput
                            style={styles.date}
                            onChangeText={(text) => this.setState({fireDate: text})}
                            value={fireDate}
                        />
                    </View>
                </View>
                <View>
                    <Button onPress={this.setAlarm} title="Set Alarm" color="#007fff" />
                </View>
            </View>
            <View style={styles.margin}>
                <Text>Alarm Time From Now (in minutes):</Text>
                <TextInput
                    style={styles.date}
                    onChangeText={(text) => this.setState({futureFireDate: text})}
                    value={futureFireDate}
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.setFutureAlarm}
                    title="Set Future Alarm"
                    color="#007fff"
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.setFutureRpeatAlarm}
                    title="Set Future Alarm with Repeat"
                    color="#007fff"
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.sendNotification}
                    title="Send Notification Now"
                    color="#007fff"
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.stopAlarmSound}
                    title="Stop Alarm Sound"
                    color="#841584"
                />
            </View>
            <View>
                <TextInput
                    style={styles.date}
                    onChangeText={(text) => this.setState({alarmId: text})}
                    value={alarmId}
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.deleteAlarm}
                    title="Delete Alarm"
                    color="#841584"
                />
            </View>
            <View style={styles.margin}>
                <Button
                    onPress={this.viewAlarms}
                    title="See all active alarms"
                    color="#841584"
                />
            </View>
            <Text>{JSON.stringify(update, null, 2)}</Text>
        </View>
    );
}