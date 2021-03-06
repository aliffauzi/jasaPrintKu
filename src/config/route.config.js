import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ScreenPembuka
import { 
    SplashScreenPages, 
    LandingPages,
} from '~/pages';
// Screen Login And Friend
import { 
    LoginPages, 
    RegisterPages
} from '~/pages';
//
const Stack = createStackNavigator();
// Screen Anak Buah login dan register dan antek2 nay :D
const ScreenLoginAndFriend = (
    <>
        <Stack.Screen 
            name="LoginScreen"
            component={LoginPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="RegisterScreen"
            component={RegisterPages}
            options={{
                headerShown: false,
            }}
        />
    </>
);
// Screen Pembuka
const ScreenPembuka = (
    <>
        <Stack.Screen 
            name="SplashScreen"
            component={SplashScreenPages}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="LandingScreen"
            component={LandingPages}
            options={{
                headerShown: false,
            }}
        /> 
    </>
);
// 
const NavigatorStack = (
    <Stack.Navigator initialRouteName="SplashScreen">
        {ScreenPembuka}
        {ScreenLoginAndFriend}
    </Stack.Navigator>
)
//
const Route = () => {
    return (
        <NavigationContainer>
            { NavigatorStack }
        </NavigationContainer>
    )
}

export default Route;