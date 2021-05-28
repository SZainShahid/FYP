import React, { Component } from 'react';
import { View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SecondRoutes from '../../Routes/secondRoutes';
import Context from '../Context';
import VerificationJS from '../../Routes/verificationRoute/verification';
import Contacts from '../loggedIn/contacts/contacts';
import Diffusal from '../loggedIn/diffusal';
import SigninNavigation from '../navigation/signinNavigation'

export default class SignIn extends Component {
    static contextType = Context;

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            zain: 0,
            location: null,
            token: null
        }
    }

    onSignIn = async (navigation) => {

        if (this.state.username === '' || this.state.email === '') {
            Alert.alert('Alert', 'Please fill out the form');
            return;
        }

        else {
            var data = {
                username: this.state.username,
                password: this.state.password
            }
            const api = await `https://77520c44d193.ngrok.io/login`;
            try {
                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                console.log("hell")
                const res = await response.json();
                console.log(res)

                if (await res.Response === "Incorrect Username"){
                    alert(res.Response)
                }
                else if(await res.Response === "Incorrect Password"){
                    alert("Incorrect Password")
                }
                else if (await res.Response === "Found") {
                    var l = await res.token
                    if(await res.verification === "No"){
                        this.setState({ zain: 2})
                    }
                    else if (await res.contacts === "0"){
                        this.setState({zain:3})    
                    }
                    else if(await res.diffusal === "null"){
                        this.setState({zain:4})
                    }
                    else{
                        this.setState({ zain: 1 })
                    }
                    
                    console.log(this.context.issigned)
                    await AsyncStorage.setItem('token', l)
                    await AsyncStorage.setItem('userName', this.state.username)
                    console.log(await AsyncStorage.getItem('userName'))

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

            } catch (error) {
                console.log(error);
                alert("Could not login. Please try again.");
                return false;
            }
        };
    }
    render() {
        const { username, password } = this.state;

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
        if (this.state.zain === 0) {
            return (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <Appbar.Header alignSelf='center'>
                        <Appbar.Content titleStyle={{ fontSize: 30 }} title="BeSecure">
                        </Appbar.Content>
                    </Appbar.Header>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: '100%', alignSelf: 'center' }}>
                                <StatusBar style="auto" />
                                <Card style={{ marginLeft: 25, marginRight: 25 }}>
                                    <Card.Content>
                                        <Title>Login</Title>
                                        <TextInput
                                            mode='outlined'
                                            label="User Name"
                                            value={username}
                                            onChangeText={text => this.setState({ username: text })}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            style={{ marginTop: 10 }}
                                            secureTextEntry={true}
                                            label="Password"
                                            value={password}
                                            onChangeText={text => this.setState({ password: text })}
                                        />
                                        <Card.Actions style={{ justifyContent: 'center' }}>
                                            <Button style={{ marginTop: 10, justifyContent: 'center' }} contentStyle={{ height: 50 }}
                                                icon='account-circle-outline'
                                                mode='outlined'
                                                onPress={() => this.onSignIn()}>
                                                Login
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
        else if(this.state.zain === 1){
            return (
                <SecondRoutes />
            )
        }
        else if(this.state.zain === 2){
            return(
                <VerificationJS/>
            )
        }
        else if(this.state.zain === 3){
            return(
                <Contacts/>
            )
        }
        else if(this.state.zain === 4){
            return(
                <Diffusal/>
            )
        }

    }

}
