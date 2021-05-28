import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppBar from './appBar'
import Maps from './../../Routes/maps'
import { TextInput } from 'react-native-paper'

export default class Location extends Component {
    render() {
        return (
            <Maps/>
        )
    }
}
