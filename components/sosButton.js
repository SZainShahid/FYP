import React, { Component } from 'react'
import { View, Alert, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Paragraph, Dialog, Portal, TextInput, Button, Card, Title, Avatar, Provider as PaperProvider } from 'react-native-paper';


export default class SOSButton extends Component {



    // onPress = () => {
    //     var data = {
    //         "asa": "asa"
    //     }
    //     return (

    //         Alert.alert(
    //             "SOS Button pressed",
    //             "Are you sure you want to continue?",
    //             [
    //                 {
    //                     text: "Cancel",
    //                     onPress: () => console.log("Cancel Pressed"),
    //                     style: "cancel"
    //                 },
    //                 {
    //                     text: "Yes", onPress: () =>

    //                         fetch(rootUrl + "emergency", {
    //                             method: "POST",
    //                             headers: {
    //                                 Accept: 'application/json',
    //                                 'Content-Type': 'application/json; charset = utf-8'
    //                             },
    //                             body: JSON.stringify(data)
    //                         })
    //                             .then(function (response) {
    //                                 return response.json();
    //                             })
    //                             .then(function (data) {
    //                                 console.log(data)
    //                             })
    //                 }
    //             ],
    //             { cancelable: false }
    //         )
    //     )
    // }
    render() {
        return (
            <>
                <Text>hello</Text>
            </>
        )
    }
}

