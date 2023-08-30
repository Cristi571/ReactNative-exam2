
/**
 * This screen allows a user to connect to an existing account
 */
import React from 'react';
import { Text, View } from 'react-native';
import LoginStyles from '../styles/LoginStyles';

export default function LoginScreen({navigation}) {
    return (
        <View style={LoginStyles.def} >
            <Text>Login Screen</Text>
        </View>
    )
}