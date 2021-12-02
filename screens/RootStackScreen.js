import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import RuleScreen from './RuleScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="RuleScreen" component={RuleScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;