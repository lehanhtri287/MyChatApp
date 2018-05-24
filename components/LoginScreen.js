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
        this.state = {
            hidden: true
        }
    }

    static navigationOptions = {
        title: 'Snapping Chat',
        headerStyle: {
            backgroundColor: '#6200EE'
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <StatusBar hidden={this.state.hidden}/>

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
                                style={style.button}>
                                <Text style={style.textView}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigate('register');
                                }}>
                                <Text style={style.textView}>Not a member? Sign up now.</Text>
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
        backgroundColor: "#6495ED",
        height: 50,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        elevation: 15
    },
    content: {
        flex: 1,
        backgroundColor: "#FFB6C1",
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
        color: "#000000"
    },
    input: {
        margin: 5,
        borderRadius: 20,
        // caretHidden: true,
        backgroundColor: "#FFFFFF",
    },
    button: {
        margin: 10,
        padding: 10,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: '#90EE90',
        borderRadius: 20,
        alignItems: 'center'
    },
    formInput: {
        // flexDirection: 'column',
        margin: 20,
    }
});