import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './index';
import RotaInterna from './rotaInterna';
import YouTube from './youtubeTela';
import Vimeo from './vimeoTela';

const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="RotaInterna"
                component={RotaInterna}
            />
            <Stack.Screen
                name="Youtube"
                component={YouTube}
            />
            <Stack.Screen
                name="Vimeo"
                component={Vimeo}
            />
        </Stack.Navigator>

    )
}