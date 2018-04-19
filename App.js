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
      <View style={[ style.container ]}>
          <View style={[style.subbox]}>
            <Text style={[style.text]}>第一行</Text>
          </View>

          <View style={[style.subbox]}>
            <Text style={[style.text]}>第二行</Text>
          </View>

          <View style={[style.subbox,style.subbox3]}>
            <Text style={[style.text]}>第三行sdfsdfsdf</Text>
          </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
    container:{
        //display:'flex',//默认flex
        flex:1,//让内容撑满屏幕的高度 因为没有其他的兄弟容器 所以它可以独自占有屏幕的高度
        flexDirection:'row',//横向排列
        flexDirection:'column',//纵向排列
        justifyContent:'center',//三个一起排列在屏幕垂直方向正中间
        justifyContent:'space-between',//三个view均分 上中下 上下紧贴边缘 也不一定是上中下 根据flexDirection决定
        justifyContent:'space-around',//三个view均分 种种下 上下距离边缘有距离
        flexWrap: 'wrap',//当view 超出屏幕时 比如subbox height:200 的时候 把它包裹进来
        alignItems:'stretch',//默认平铺stretch 这时候如果给宽度就不可以了 不会平铺了  还有其他对齐方式: flex-start flex-end center 这种是根据内容来决定宽度的相当于css de inline
        backgroundColor:'#85CEF4',
        height:500

    },
    subbox:{
        backgroundColor:'red',
        height:50,
        flexGrow:1, //注意这个等分不是绝对等分, 是除去必要的内容 文字空间后 的 空间进行等分 代表的剩余空间分份 flexGrow 可以简写为flex
        //width:200
    },
    subbox3:{
      alignSelf:'center' ,// 单个item自己的对齐方式
      flexGrow:2 , //弹性空间 box1 和box2 占100, 这里box3设置flexGrow:1 就是占剩余空间 默认值是0
    },
    text:{
        color:'#fff'
    }
});
