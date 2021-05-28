import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppBar from './appBar'


export default class Profile extends Component {

    render() {
        return (
            <>
            <AppBar/>
            <Text>Profile</Text>
            </>
        )
    }
}
