import React, { Component } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Contacts extends Component {

    state = {
        location: null
    };

    constructor(props) {
        super(props)
        this.state = {
            token: null,
            contact_name: "",
            contact_number: ""
        }
    }

    onSend = async() => {

        
        if (this.contact_name === '' || this.contact_number === '') {
            Alert.alert('Missing information', 'Please fill the form');
            return;
        }
        else {
            const token = await AsyncStorage.getItem('token')
            this.setState({ token })
            var data = {
                "token": this.state.token,
                "contact_name": this.state.contact_name,
                "contact_number": this.state.contact_number
            }
            const api = await `https://77520c44d193.ngrok.io/contacts`;
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
                    alert('Number entered')
                    this.setState({
                        contact_name: "",
                        contact_number: ""
                    })
                }

            } catch (error) {
                console.log(error);
                alert("Please try again.");
                return false;

            }

            console.log(a)

        }


        

        


        // Alert.alert(
        //     "Alert Title",
        //     "My Alert Msg",
        //     [
        //         {
        //             text: "Cancel",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "cancel"
        //         },
        //         { text: "OK", onPress: () => console.log() }
        //     ],
        //     { cancelable: false }
        // );
    }

    render() {
        const { contact_name, contact_number } = this.state;

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
                            <StatusBar style="auto" />
                            <Card style={{ marginLeft: 25, marginRight: 25 }}>
                                <Card.Content>
                                    <Title>Emergency Contacts</Title>
                                    <TextInput
                                        mode='outlined'
                                        style={{ marginTop: 10 }}
                                        label="Contact Name"
                                        value={contact_name}
                                        onChangeText={text => this.setState({ contact_name: text })}
                                    />
                                    <TextInput
                                        keyboardType="number-pad"
                                        mode='outlined'
                                        style={{ marginTop: 10 }}
                                        label="Contact Number"
                                        value={contact_number}
                                        onChangeText={number => this.setState({ contact_number: number })}
                                    />
                                    <Card.Actions style={{ justifyContent: 'center' }}>
                                        <Button style={{ marginTop: 10, justifyContent: 'center' }} contentStyle={{ height: 50 }}
                                            icon='contacts'
                                            mode='outlined'
                                            onPress={() => this.onSend()}>
                                            Enter
                                </Button>
                                    </Card.Actions>
                                </Card.Content>
                            </Card>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

export default Contacts;