import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../signInsignUp/signin';
import SignUp from '../signInsignUp/signup';

function signUpScreen({ navigation }) {
    return (
        <>
            <SignUp />
        </>
    );
}


function signInScreen({ navigation }) {
    return (
        <>
            <SignIn />
            <Button
                title="New User? Registere from here"
                onPress={() => navigation.navigate('Register')}
            />
        </>
    );
}

const Stack = createStackNavigator();

function SigninNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Register">
                <Stack.Screen name="Register" component={signUpScreen} />
                <Stack.Screen name="Login" component={signInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default SigninNavigation;