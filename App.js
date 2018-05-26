import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import LoginScreen from "./App/components/screen/LoginScreen";
import RegisterScreen from "./App/components/screen/RegisterScreen";
import UserInfoScreen from "./App/components/screen/UserInfoScreen";

const appNavigator = StackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            headerStyle: {
                backgroundColor: '#6200EE'
            }
        }
    },
    register: {
        screen: RegisterScreen,
        navigationOptions: {
            title: 'Register',
            headerStyle: {
                backgroundColor: '#6200EE'
            }
        }
    },
    userInfo:{
        screen: UserInfoScreen,
        navigationOptions:{
            title: 'Name',
            headerStyle: {
                backgroundColor: '#6200EE'
            }
        }
    }
})
export default appNavigator;

