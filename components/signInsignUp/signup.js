import React, { Component } from 'react';
import { StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, Picker } from 'react-native';
import { Text, TextInput, Button, Card, Title, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import App from '../../App'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            phone: "03",
            cnic: "",
            gender: ""
        }
    }

    onSignUp = async () => {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (this.state.username === '' || this.state.email === '') {
            Alert.alert('Alert', 'Please fill out the form');
            return;
        }
        if (reg.test(this.state.email) === false) {
            Alert.alert('Incorrect Email Address', 'Please enter email address in a correct format')
            return;
        }
        if (this.state.password.length < 9) {
            Alert.alert('Alert', 'Password length should be greater than 8');
            return;
        }
        if (this.state.cnic.length < 13) {
            Alert.alert('Alert', 'CNIC number does not meet the requirements')
            return;
        }
        else {
            // Alert.alert(
            //     "Alert Title",
            //     "My Alert Msg",
            //     [
            //         {
            //             text: "Cancel",
            //             onPress: () => console.log("Cancel Pressed"),
            //             style: "cancel"
            //         },
            //         {
            //             text: "OK", onPress: () => this.setState({
            //                 email: '',
            //                 username: '',
            //                 password: '',
            //                 phone: '03',
            //                 cnic: '',
            //                 gender: ''
            //             })
            //         }
            //     ],
            //     { cancelable: false }
            // );

            var data = {
                "email": this.state.email,
                "username": this.state.username,
                "password": this.state.password,
                "phone": this.state.phone,
                "cnic": this.state.cnic,
                "gender": this.state.gender
            }

            const api = await `https://77520c44d193.ngrok.io/register`;
            try {
                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                const res = await response.json();
                // console.log(res);
                var a = res.Response
                if (await res.Response === "success") {
                    console.log(res);
                    console.log('abc')
                    var a = res.Response;
                    alert('User Registered')
                    this.setState({
                        email: '',
                        username: '',
                        password: '',
                        phone: '03',
                        cnic: '',
                        gender: ''
                    })
                }
                else if (await res.Response === '0') {
                    alert('CNIC already exists');
                }
                else if (await res.Response === '1') {
                    alert('Phone Number already exists');
                }
                else if (await res.Response === '2') {
                    alert('Email already exists');
                }
                else if (await res.Response === '3') {
                    alert('User Name already exists');
                }
                else {
                    alert('Please enter the form again');
                }

            } catch (error) {
                console.log(error);
                alert("Could not login. Please try again.");
                return false;
            }

            console.log(a)
        }

    }

    render() {

        const { username, password, email, phone, cnic, gender } = this.state;

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
            },
            scrollView: {
                height: '100%',
                width: '100%',
                margin: 30,
                alignSelf: 'center',
                padding: 20,
                borderWidth: 5,
                borderRadius: 5,
                borderColor: 'white',
                backgroundColor: 'white'
            }
        });

        return (

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <Appbar.Header alignSelf='center'>
                    <Appbar.Content titleStyle={{ fontSize: 30 }} title="BeSecure">
                    </Appbar.Content>
                </Appbar.Header>
                <ScrollView style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: '100%', alignSelf: 'center' }}>
                                <StatusBar style="auto" />
                                <Card>
                                    <Card.Content>
                                        <Title>Register</Title>
                                        <TextInput
                                            keyboardType="email-address"
                                            mode='outlined'
                                            label="Email Address"
                                            value={email}
                                            onChangeText={text => this.setState({ email: text })}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            style={{ marginTop: 10 }}
                                            label="User Name"
                                            value={username}
                                            onChangeText={text => this.setState({ username: text })}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            style={{ marginTop: 10 }}
                                            maxLength={24}
                                            secureTextEntry={true}
                                            label="Password"
                                            value={password}
                                            onChangeText={text => this.setState({ password: text })}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            keyboardType='number-pad'
                                            maxLength={11}
                                            style={{ marginTop: 10 }}
                                            label="Phone Number"
                                            value={phone}
                                            onChangeText={number => this.setState({ phone: number })}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            keyboardType='number-pad'
                                            maxLength={13}
                                            minLength={13}
                                            style={{ marginTop: 10 }}
                                            label="CNIC Number"
                                            value={cnic}
                                            onChangeText={number => this.setState({ cnic: number })}
                                        />
                                        <Card.Actions style={{ justifyContent: 'center' }}>
                                            <Button style={{ marginTop: 10, justifyContent: 'center' }} contentStyle={{ height: 50 }}
                                                icon='account-plus-outline' mode="outlined"
                                                onPress={() => this.onSignUp()}>
                                                Register
                                            </Button>
                                        </Card.Actions>
                                    </Card.Content>
                                </Card>
                                <Button>Already Registered? Login from here</Button>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default SignUp;