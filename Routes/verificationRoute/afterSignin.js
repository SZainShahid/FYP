import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VerificationJS from './verification';

function HomeScreen() {
  return (
    <VerificationJS/>
  );
}

const Stack = createStackNavigator();

function AfterSignin() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Verification" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AfterSignin;