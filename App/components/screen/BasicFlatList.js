import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import flatListData from './flatListData'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ marginRight: 60 }} >
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../img/user-man-info-2-icon.png')}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontSize: 18, color: 'white' }}>
            {this.props.name}
          </Text>
          <Text style={{ color: 'white' }} >Online</Text>
        </View>
        <View style={{ marginLeft: 60 }} >
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={require('../img/lilly-luta.jpg')} />
        </View>
      </View>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View>
          <Image
            style={{ width: 20, height: 20, marginRight: 10 }}
            source={require('../img/paperclip.png')}
          />
        </View>
        <View>
          <TextInput
            style={{ width: 300, backgroundColor: '#d6d6c2', borderRadius: 7, paddingBottom: 8, paddingTop: 8, textDecorationLine: "none" }}
            placeholder='   Write a message...' />
        </View>
        <View>
          <Image
            style={{ width: 20, height: 20, marginLeft: 10 }}
            source={require('../img/voice.png')} />
        </View>
      </View>
    );
  }
}
class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <View style={{
        backgroundColor: 'white',
        // backgroundColor: this.state.index % 2 == 0 ? 'mediumseagreen' :'tomato',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
        width: 'auto',
      }} >
        <View >
          <Text style={{
            textAlign: this.state.index % 2 == 0 ? 'right' : 'left',
            color: this.state.index % 2 == 0 ? 'green' : '#7393f2',
            padding: 10,
            fontSize: 16,
          }} >{this.state.item.coment}</Text>
        </View>
        <View>
        </View>
      </View>
    )
  }
}

export default class BasicFlatList extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} {...Platform.OS == 'ios' ? { behavior: 'padding' } : null} >
        <Header name="Aleksandar Djuric" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListData}
            renderItem={({ item, index }) => {
              // console.log(`Item= ${JSON.stringify(item)}, index=${JSON.stringify(index)}`)
              return (
                <FlatListItem item={item} index={index} >
                </FlatListItem>
              );
            }}>
          </FlatList>
        </View>
        <Footer />
      </KeyboardAvoidingView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
    // backgroundColor:'#ffff99',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgb(120, 175, 30)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 85,
    paddingTop: 20
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
