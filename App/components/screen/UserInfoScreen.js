import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView, 
    TouchableOpacity
}
    from 'react-native';

export default class UserInfoScreen extends Component {
    render() {
        return (
            <ScrollView style={styleShow.container}>
                <View style= {styleShow.avatar}>
                    <Image
                        borderRadius={50}
                        source={require('../../assets/images/icon-user.png')}
                        style={styleShow.imageStyle}/>
                    <Text style={{fontWeight: 'bold', fontSize: 25, color:'black'}}> User Name</Text>
                </View>
                <View style= {styleShow.content}>
                    <Text style={{color:'black', margin: 10}}>Username: abc@example.com</Text>
                    <Text style={{color:'black', margin: 10}}>SDT: 1231231231</Text>
                    <Text style={{color:'black', margin: 10}}>Username: abc@example.com</Text>
                    <Text style={{color:'black', margin: 10}}>SDT: 1231231231</Text>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#9E9E9E'
    },
    infoStyle:{
        justifyContent: 'center',
        alignItems:'center'
    },
    content:{
        margin:30,
        backgroundColor:'white', 
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
        borderRadius: 20,
        alignItems: 'center'
    },
})