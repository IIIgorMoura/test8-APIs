import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Image source={require('./assets/youtubeLogo.png')} size={15} />)
                        }
                        return (<Image source={require('./assets/youtubeLogo.png')} size={20} />)
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
                            return (<Image source={require('./assets/vimeoLogo.png')} size={15} />)
                        }
                        return (<Image source={require('./assets/vimeoLogo.png')} size={20} />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}