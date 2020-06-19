import * as React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import SelectProvider from './pages/New/SelectProvider'
import SelectDateTime from './pages/New/SelectDateTime'
import Confirm from './pages/New/Confirm'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator();

function New() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#FFF',
                headerLeftContainerStyle: { marginLeft: 20 },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="SelectProvider" component={SelectProvider}
                options={{ title: 'Selecione o prestador', headerTransparent: true }} />
            <Stack.Screen name="SelectDateTime" component={SelectDateTime}
                options={{ title: 'Selecione o horário', headerTransparent: true }} />
            <Stack.Screen name="Confirm" component={Confirm}
                options={{ title: 'Confirmar agendamento', headerTransparent: true }} />
        </Stack.Navigator>
    );
}

function Routes() {
    const isSigned = useSelector(state => state.auth.signed)

    return (
        <NavigationContainer>
            {isSigned ?
                (<Tab.Navigator
                    tabBarPosition={'bottom'}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName
                            if (route.name === 'Dashboard') {
                                iconName = 'event'
                            } else if (route.name === 'Profile') {
                                iconName = 'person'
                            } else if (route.name === 'New') {
                                iconName = 'add-circle-outline'
                            }
                            return <Icon name={iconName} size={25} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        showIcon: true,
                        tabStyle: { height: 60 },
                        indicatorStyle: { backgroundColor: "#FFF" },
                        style: { backgroundColor: '#7159c1' },
                        activeTintColor: '#FFF',
                        labelStyle: { fontSize: 12 }
                    }}
                >
                    <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Agendamentos' }} />
                    <Tab.Screen name="New" component={New} options={{ title: 'Agendar' }} />
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