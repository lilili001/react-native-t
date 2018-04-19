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

                <View style={[style.subbox]}>
                    <Text style={[style.text]}>第三行</Text>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',//横向排列
        flexDirection:'column',//纵向排列
        justifyContent:'center',//三个一起排列在屏幕垂直方向正中间
        justifyContent:'space-between',//三个view均分 上中下 上下紧贴边缘
        justifyContent:'space-around',//三个view均分 种种下 上下距离边缘有距离
        flexWrap: 'wrap',//当view 超出屏幕时 比如subbox height:200 的时候 把它包裹进来
        alignItems:'center',//默认平铺stretch 这时候如果给宽度就不可以了 不会平铺了  还有其他对齐方式: flex-start flex-end center 这种是根据内容来决定宽度的相当于css de inline
        backgroundColor:'purple',
        height:500

    },
    subbox:{
        backgroundColor:'red',
        height:50,
        //width:200
    },
    text:{
        color:'#fff'
    }
});
