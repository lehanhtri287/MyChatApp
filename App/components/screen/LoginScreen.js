import React, {Component} from "react";

import {
    View,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Button
} from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    //
    // static navigationOptions = {
    //     title: 'Snapping Chat',
    //     headerStyle: {
    //         backgroundColor: '#6200EE'
    //     }
    // }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <View style={style.content}>
                    <View style={style.wrapper}>
                        <View style={style.formInput}>
                            <TextInput
                                style={style.input}
                                underlineColorAndroid='transparent'
                                placeholder='Username'/>
                            <TextInput
                                style={style.input}
                                secureTextEntry
                                underlineColorAndroid='transparent'
                                placeholder='Password'/>
                        </View>
                        <View style={style.formInput}>
                            <TouchableOpacity
                                onPress={()=>{
                                    navigate('userInfo');
                                }}
                                style={style.button}>
                                <Text style={style.textView}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigate('register');
                                }}>
                                <Text style={{color:'black', fontSize: 20}}>Not a member? Sign up now.</Text>
                            </TouchableOpacity>
                            {/*<Button*/}
                            {/*title="Not a member? Sign up now."*/}
                            {/*onPress={() => {*/}
                            {/*navigate('register');*/}
                            {/*}}*/}
                            {/*/>*/}

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey",
        height: 50,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        elevation: 15
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    textView: {
        fontSize: 20,
        textAlign: 'center',
        color: "#FFFFFF"
    },
    input: {
        margin: 5,
        borderRadius: 20,
        // caretHidden: true,
        backgroundColor: '#E0E0E0',
    },
    button: {
        margin: 10,
        padding: 10,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        alignItems: 'center'
    },
    formInput: {
        // flexDirection: 'column',
        margin: 20,
    }
});