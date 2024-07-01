import React, { useState, useEffect } from 'react';
import '../nativewind.config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    // AsyncStorage.clear();
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); 

    }, []);

    if (isFirstLaunch === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ header: () => null }}
                // options={({ navigation }) => ({
                //     title: '',
                //     headerStyle: {
                //         backgroundColor: '#f9fafd',
                //         shadowColor: '#f9fafd',
                //         elevation: 0,
                //     },
                //     headerLeft: () => (
                //         <View style={{ marginLeft: 10 }}>
                //             <FontAwesome.Button
                //                 name="long-arrow-left"
                //                 size={25}
                //                 backgroundColor="#f9fafd"
                //                 color="#333"
                //                 onPress={() => navigation.navigate('Login')}
                //             />
                //         </View>
                //     ),
                // })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
