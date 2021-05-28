import React, { Component } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

class VerificationJS extends Component {

    state = {
        code: '',
        token: null
    }

    onEnter = async () => {
        console.log(await AsyncStorage.getItem('token'))
        if (this.code === '') {
            Alert.alert('Incorrect code', 'Please enter the correct code');
            return;
        }
        else {
            const token = await AsyncStorage.getItem('token')
            this.setState({ token })
            var data = {
                "code": this.state.code,
                "token": this.state.token
            }
            const api = await `https://77520c44d193.ngrok.io/verify`;
            try {
                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                const res = await response.json();
                if (await res.Response === "email verified") {
                    console.log(res);
                    alert('Email Verified')
                }
                else if (await res.Response === 'invalid code') {
                    alert('invalid code');
                }
                else {
                    alert('Please enter the code again');
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

        const { code, token } = this.state;

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
                                <Card.Title title="Verifcation" subtitle="Please enter the verification code sent to your email." />
                                <Card.Content>
                                    <TextInput
                                        mode='outlined'
                                        style={{ marginTop: 10, marginBottom: 10 }}
                                        label="Verification Code"
                                        onChangeText={number => this.setState({ code: number })}
                                        keyboardType="number-pad"
                                        value={code}
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

export default VerificationJS
