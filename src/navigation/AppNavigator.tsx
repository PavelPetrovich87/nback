import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
// import Game from '../screens/Game'; // Create this file later

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                {/*<Stack.Screen name="Game" component={Game} options={{ title: 'Game' }} /> /!* Create this file later *!/*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
