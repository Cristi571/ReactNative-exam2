// rnfs

import {React, useState } from 'react'
import { Image, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import { ProfileScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();


export default function BottomTab(props) {
return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
        headerTintColor: '#2278B6', // header title color
        headerStyle: { backgroundColor: '#33B4D8' },
    }}
    >
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            headerRight: () => (
                <Button
                onPress={() => alert('User signed out.')}
                title='Sign out'
                color={"#f74"}
                backgroundColor={"#000"}
                marginRight={40}
                />
            ),
            tabBarIcon:({focused, color})=>(
                <Icon name="ios-home" size={20}/>
            ),
            tabBarActiveBackgroundColor:"#FFFEFF",
            tabBarInactiveBackgroundColor: "#9C8DA5",
            tabBarActiveTintColor:"#000",
            tabBarInactiveTintColor:"#EAECF8",
        }}
        />
        
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
            tabBarIcon:({focused, color})=>(
                <Icon name="ios-person" size={20}/>
            ),
            tabBarActiveBackgroundColor:"#FFFEFF",
            tabBarInactiveBackgroundColor: "#9C8DA5",
            tabBarActiveTintColor:"#000",
            tabBarInactiveTintColor:"#EAECF8",
        }}
        />
    </Tab.Navigator>
)}

