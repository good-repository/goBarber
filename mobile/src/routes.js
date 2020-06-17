import * as React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator();

function Routes() {
    const isSigned = useSelector(state => state.auth.signed)

    return (
        <NavigationContainer>
            {isSigned ?
                (<Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName
                        if (route.name === 'Dashboard') {
                            iconName = 'event'
                        } else if (route.name === 'Profile') {
                            iconName = 'person'
                        }
                        return <Icon name={iconName} size={20} color={color} />;
                    },
                })}
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        style: { backgroundColor: '#7159c1' },
                        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                    }}
                >
                    <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Agendamentos' }} />
                    <Tab.Screen name="Profile" component={Profile} options={{ title: 'Meu perfil' }} />
                </Tab.Navigator>)
                :
                (<Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                </Stack.Navigator>)
            }
        </NavigationContainer>
    );
}

export default Routes