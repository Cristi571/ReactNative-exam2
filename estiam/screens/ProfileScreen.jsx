
/**
 * This screen allows a user to display details of the current connected user
 */
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import ProfileStyles from '../styles/ProfileStyles';

export default function ProfileScreen({navigation}) {
    return (
        <View style={ProfileStyles.body} >
            <Image source={require('../images/user-icon.png')} style={ProfileStyles.userAvatar}></Image>
            <Text>John Doe</Text>
            <Text>john.doe@mail.com</Text>

            <Pressable 
            style={ProfileStyles.editBtn} 
            onPress={()=> alert('Fonctionnalité en cours de développement. \nMerci.')} >
                    <Text style={ProfileStyles.editBtnLabel} >Modifier</Text>
            </Pressable>
        </View>
    )
}