import React, { Component } from 'react'
import {
  StyleSheet,
  Text, Image,
  View, Button, TouchableOpacity
} from 'react-native'

import { StackNavigator, TabNavigator } from 'react-navigation'
import LoginScreen from "./App/components/screen/LoginScreen"
import RegisterScreen from "./App/components/screen/RegisterScreen"
import UserInfoScreen from "./App/components/screen/UserInfoScreen"
import BasicFlatList from './App/components/screen/BasicFlatList'
import HomeScreen from './App/components/screen/Home';

const appNavigator = TabNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#6200EE'
      }
    }
  },
  register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6200EE'
      }
    }
  },
  userInfo: {
    screen: UserInfoScreen,
    navigationOptions: {
      title: 'Name',
      headerTitleStyle: {
        alignSelf: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#6200EE'
      },
      headerRight:
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, marginRight: 10 }}>Sign out</Text>
        </TouchableOpacity>
    }
  },
  list: {
    screen: BasicFlatList,
    navigationOptions: {
      header: null
    }
  },
})
export default appNavigator
