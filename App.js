import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

const appNavigator = StackNavigator({
    login: {screen: LoginScreen},
    register: {screen: RegisterScreen}
})
export default appNavigator;