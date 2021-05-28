import React, { Component } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Diffusal extends Component {
    state = {
        diffusal_code: '',
        token: null
    }

    onEnter = async () => {
        console.log(await AsyncStorage.getItem('token'))
        if (this.diffusal_code === '') {
            Alert.alert('Incorrect code', 'Please enter the correct code');
            return;
        }
        else {
            const token = await AsyncStorage.getItem('token')
            this.setState({ token })
            var data = {
                "diffusal_code": this.state.diffusal_code,
                "token": this.state.token
            }
            const api = await `https://77520c44d193.ngrok.io/diffusal`;
            try {
                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                const res = await response.json();
                if (await res.Response === "success") {
                    console.log(res);
                    alert('Diffusal Code Successfully stored')
                }

            } catch (error) {
                console.log(error);
                alert("Please try again.");
                return false;
            }

            console.log(a)

        }

    }


    render() {
        const { diffusal_code } = this.state;

        const styles = StyleSheet.create({
            container: {
                flex: 1
            },
            inner: {
                padding: 24,
                flex: 1,
                justifyContent: "space-around"
            },
            header: {
                fontSize: 36,
                marginBottom: 48
            },
            textInput: {
                height: 40,
                borderColor: "#000000",
                borderBottomWidth: 1,
                marginBottom: 36
            },
            btnContainer: {
                backgroundColor: "white",
                marginTop: 12
            }
        });
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ width: '100%', alignSelf: 'center' }}>
                            <Card>
                                <Card.Title title="Diffusal Code" subtitle="Please enter a 4 digit diffusal code that will be used for the SOS button." />
                                <Card.Content>
                                    <TextInput
                                        mode='outlined'
                                        style={{ marginTop: 10, marginBottom: 10 }}
                                        label="Diffusal Code"
                                        onChangeText={number => this.setState({ diffusal_code: number })}
                                        keyboardType="number-pad"
                                        value={diffusal_code}
                                    />
                                    <Card.Actions style={{ justifyContent: 'center' }}>
                                        <Button
                                            mode='outlined'
                                            style={{ justifyContent: 'center' }}
                                            onPress={() => this.onEnter()}>Enter</Button>
                                    </Card.Actions></Card.Content>
                            </Card>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}
