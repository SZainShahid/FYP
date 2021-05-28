import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Contacts from './components/loggedIn/contacts/contacts';
import FirstRoutes from './Routes/firstRoute';
import SecondRoutes from './Routes/secondRoutes';
import AfterSignin from './Routes/verificationRoute/afterSignin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isAuth } from './IsAuth'
import Context from './components/Context';
import SigninNavigation from './components/navigation/signinNavigation';

rootUrl = 'https://42dd0b88cc7a.ngrok.io/';
var isSignedin = 0


export default class App extends Component {

  renderElement() {
    if (isSignedin === 0) {
      return (
        <>
        <SigninNavigation />
        
        </>
      )
    }
    else if (isSignedin === 1) {
      return (
        <SecondRoutes />
      )
    }
    else if (isSignedin === 2) {
      return (
        <AfterSignin />
      )
    }
    else if (isSignedin === 3) {
      return (
        <Contacts />
      )
    }
  }

  render() {

    return (

      <>{this.renderElement()}</>

    )
  }
}
