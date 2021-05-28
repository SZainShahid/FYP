import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

export default class AppBar extends Component {
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content
                    title={<Image title="BeSecure" source={require('../../assets/logo.png')}
                        style={{
                            width: 40,
                            height: 58,
                        }}
                    />}
                />
                <Appbar.Content titleStyle={{ marginRight: 10 }} title="BeSecure" />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="message-text-outline" />
            </Appbar.Header >
        )
    }
}
