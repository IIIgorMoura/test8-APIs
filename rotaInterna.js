import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { buscarVideosYoutube } from './youtube';
import { buscarVideosVimeo } from './vimeo';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Youtube"
                component={buscarVideosYoutube}
                options={{
                    tabBarBadge: 1,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Vimeo"
                component={buscarVideosVimeo}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}