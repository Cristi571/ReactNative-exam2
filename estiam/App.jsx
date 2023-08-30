
// Main dev components
import { Button, StyleSheet, Text, View } from 'react-native';

// Local custom styles
import AppStyles from './styles/AppStyles';

// Import the main app screens
import { HomeScreen } from './screens';
import { SignupScreen } from './screens';
import { LoginScreen } from './screens';
import { ProfileScreen } from './screens';
import { QuestScreen } from './screens';
import { BottomTab } from './components';


// Manage phone top & bottom status bars
import { StatusBar } from 'expo-status-bar';
// Other packages & features used
// * @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';
// * @react-navigation/native-stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// * react-native-screens
// * react-native-safe-area-context
// * @react-navigation/bottom-tabs
// * ImageBackground
const Stack = createNativeStackNavigator();

export default function App() {
return (
<View style={AppStyles.mainContainer}>
    <NavigationContainer>
        <BottomTab
        initialRouteName='Home'
        screenOptions={{
            headerTintColor: '#2278B6', // header title color
            headerStyle: { backgroundColor: '#33B4D8' },
        }}
        >
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} style={ styles.def }
            options={{
                headerRight: () => (
                    <Button
                    onPress={() => alert('User signed out.')}
                    title='Sign out'
                    color={"#f74"}
                    backgroundColor={"#000"}
                    />
                )
            }} />
            <Stack.Screen name='Login Screen' component={LoginScreen} />
            <Stack.Screen name='Signup Screen' component={SignupScreen} />
            <Stack.Screen name='Profile Screen' component={ProfileScreen} />
            <Stack.Screen name='Quest Screen' component={QuestScreen} />
        </Stack.Navigator> 
        </BottomTab>
    </NavigationContainer>
</View>
);
}

const styles = StyleSheet.create({
    def: {
        backgroundColor: '#33B4D8',
    },
});