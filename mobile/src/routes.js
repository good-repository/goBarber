import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#7159c1' },
                headerTintColor: '#fff'
            }}>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                {/* <Stack.Screen name="User" component={User} options={({ route }) => ({ title: route.params.user.name })} /> */}
                {/* <Stack.Screen name="Repository" component={Repository} options={({ route }) => ({ title: route.params.repository.name })} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes