import React, {Component} from "react";

import {
    View,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class RegisterScreen extends Component {
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
        return (
            <View style={style.container}>
                <StatusBar hidden={this.state.hidden}/>

                <View style={style.formInput}>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid='transparent'
                        placeholder='Username'/>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid='transparent'
                        placeholder='First name'/>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={style.input}
                        placeholder='Last name'/>
                    <TextInput
                        style={style.input}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        placeholder='Password'/>
                    <TextInput
                        style={style.input}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        placeholder='Confirm password'/>
                    <TouchableOpacity
                        onPress={this.props.backLogin}
                        style={style.button}>
                        <Text style={style.textView}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    textView: {
        fontSize: 20,
        textAlign: 'center',
        color: "#000000"
    },
    input: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    button: {
        margin: 10,
        padding: 10,
        marginLeft: 90,
        marginRight: 90,
        backgroundColor: '#90EE90',
        borderRadius: 20,
        alignItems: 'center'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6495ED",
        height: 50
    },
    textAppBar: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '400',

    },
    formInput: {
        flex: 1,
        backgroundColor: "#FFB6C1",
        justifyContent: 'center'
    }
});