import * as React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Routes() {
    const isSigned = useSelector(state => state.auth.signed)

    return (
        <NavigationContainer>
            {isSigned ?
                (<Tab.Navigator>
                    <Tab.Screen name="Dashboard" component={Dashboard} />
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