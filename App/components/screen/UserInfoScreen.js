import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView, 
    TouchableOpacity, Button
}
from 'react-native';

import {
    Card,
    CardImage,
    CardTitle, CardContent, CardAction
} 
from 'react-native-card-view';


export default class UserInfoScreen extends Component {
    render() {
        return (
            <ScrollView style={styleShow.container}>
                <View style= {styleShow.avatar}>
                    <Image
                        borderRadius={50}
                        source={require('../../assets/images/icon-user.png')}
                        style={styleShow.imageStyle}/>
                </View>
                <View style= {styleShow.content}>
                    {/* <Text style={{color:'black', margin: 10}}>Username: abc@example.com</Text>
                    <Text style={{color:'black', margin: 10}}>SDT: 1231231231</Text>
                    <Text style={{color:'black', margin: 10}}>Username: abc@example.com</Text>
                    <Text style={{color:'black', margin: 10}}>SDT: 1231231231</Text> */}
                    <Text style={{fontWeight: 'bold', fontSize: 25, color:'black', margin:10}}> User Name</Text>
                    <Text style={styleShow.cardContent}>Content 1</Text>
                    <Text style={styleShow.cardContent}>Content 2</Text>
                    
                </View>
                <View style={styleShow.footer}>
                    <TouchableOpacity
                        style={styleShow.button}>
                            <Text style={{color:'white', fontSize:15}}>Chat now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styleShow.button}>                    
                            <Text style={{color:'white', fontSize:15}}>Cancel</Text>
                    </TouchableOpacity>            
                </View>
            </ScrollView>
        )
    }
}

var styleShow = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    imageStyle:{
        width: 100, 
        height: 100
    },
    avatar:{
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#9E9E9E'
    },
    infoStyle:{
        justifyContent: 'center',
        alignItems:'center'
    },
    content:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    },
    footer:{
        flexDirection: 'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-start'
    },    
    button: {
        flex:1/2,
        margin: 10,
        padding: 10,
        marginRight: 30,
        marginLeft: 30,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent'
    },
    cardContent: {
        margin:5,
        padding:10,
        borderRadius: 10,
        borderColor:'grey',
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
    }
})