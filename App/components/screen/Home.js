import React, { Component } from "react"

import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet, Button,
  Image, FlatList
} from 'react-native'

export default class HomeScreen extends Component{
    constructor(props){
      super(props);
      this.state = {
        array:[
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
          {imageURL:'../../assets/images/chat_app.jpg', name:'Tri Le', content:'ahihihihi'},
        ]
      }
    }
    render(){
      return(
        <FlatList
          data={this.state.array}
          renderItem={({item})=>
            <View style={{
                flexDirection:'row',
                padding: 20,
                borderRadius:10,
                borderColor:'grey'}}>
              <Image
                source={require('../../assets/images/chat_app.jpg')}
                style={{width:20, height:20}}/>
              <Text>{item.name}</Text>
              <Text>{item.content}</Text>              
            </View>
          }
        />
      );
    }
}


