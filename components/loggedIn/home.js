import React, { Component } from 'react'
import { View, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import AppBar from './appBar'
import { Paragraph, Dialog, Portal, Button, Text, TextInput, Avatar, Card, Provider as PaperProvider } from 'react-native-paper';
import SOSButton from '../sosButton'

export default class Home extends Component {
    
    render() {
            return (
                <>
                    <AppBar />
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ width: '100%', alignSelf: 'center' }}>
                            <TouchableOpacity>
                                <Avatar.Image style={{ alignSelf: 'center', backgroundColor: 'black' }} size={300} source={require('./../../assets/SOS.png')} />
                            </TouchableOpacity>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>
                                Press this button in case of emergency only
                            </Text>
                        </View>
                    </View>
                </>



            )

        // else if (this.state.isTapped === true) {
        //     return (
        //         <Text>
        //             hello
        //         </Text>
        //     )
        // }
    }
}

