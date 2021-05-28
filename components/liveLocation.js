import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LiveLocation extends Component {
    state = {
        location: null,
        token: null
    };

    findCoordinates = async () => {
        try {
            setInterval(async () => {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const location = JSON.stringify(position);

                        this.setState({ location });
                    },
                    error => Alert.alert(error.message),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
                const token = JSON.stringify(await AsyncStorage.getItem('token'))
                this.setState({ token })
                console.log(this.state.location)
                console.log(this.state.token)

                var data = {
                    'location': this.state.location,
                    'token': await AsyncStorage.getItem('token')
                }
                const api = await `https://77520c44d193.ngrok.io/location`;

                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                const res = await response.json();
                var a = res.Response
                if (await res.Response === "success") {
                    console.log(res.Response)
                }
            }, 30000);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find My Coords?</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})
