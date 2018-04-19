/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={[ style.container, style.other ]}>
          <View style={[style.subbox]}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container:{
        width:200,
        height:200,
        backgroundColor:"#ff6600",
        marginHorizontal:40,
        marginVertical:30,
        borderRadius:10,
        padding:30,
        borderWidth:2,
        borderColor:'#532aa3',
        borderStyle:'dashed',
        shadowOffset: {width: 10, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor:'red',
        elevation: 4
    },
    other:{
        backgroundColor:'#00ff66',
    },
    subbox:{
        height:50,
        backgroundColor:'#784578'
    }
});
