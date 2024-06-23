import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import YouTube from './youtubeTela';
import Vimeo from './vimeoTela';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Youtube"
                component={YouTube}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Image source={require('./assets/youtubeLogo.png')} style={estilos.iconIn} />)
                        }
                        return (<Image source={require('./assets/youtubeLogo.png')} style={estilos.iconOut} />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Vimeo"
                component={Vimeo}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Image source={require('./assets/vimeoLogo.png')} style={estilos.iconIn} />)
                        }
                        return (<Image source={require('./assets/vimeoLogo.png')} style={estilos.iconOut} />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}
const estilos = StyleSheet.create({
    iconOut: {
        width: '10%',
        height: '30%',
    },
    iconIn: {
        width: '20%',
        height: '60%',
    },
 });