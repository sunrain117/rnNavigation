import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { headerImage } from './imageManage';

//自定义左部视图
const renderLeftButton = (navigation) => {
    const { state, goBack } = navigation;
    const { params, routeName, index } = state;
    let leftTitle = (params && params.leftTitle) || '返回';
    let leftClick = (params && params.leftClick) || goBack;
    let leftUI = null;
    switch (routeName) {
        // case 'Tab':
        //     leftUI = <View style={[styles.defBtnWrapper]}>
        //     </View>
        //     break;
        default:
            leftUI = <View style={[styles.defBtnWrapper]}>
                <TouchableOpacity style={[styles.defBtn]} onPress={() => leftClick()}>
                    <Image source={headerImage.leftIcon}></Image>
                </TouchableOpacity>
            </View>
    }
    return leftUI;
}
//自定义中部视图
const renderCenter = (navigation) => {
    const { state, goBack } = navigation;
    const { params, routeName, index } = state;
    let centerTitle = (params && params.centerTitle) || 'centerTitle';
    let centerUI = null;
    switch (routeName) {
        // case 'Tab':
        //     centerUI = <View style={styles.centerWrapper}>
        //     </View>
        //     break;
        default:
            centerUI = <View style={styles.centerWrapper}>
                <Text style={[styles.centerText, params && params.centerStyle ? params.centerStyle : {}]}>{centerTitle}</Text>
            </View>
    }
    return centerUI;
}
//自定义右部视图
const renderRightButton = (navigation) => {
    const { state, goBack } = navigation;
    const { params, routeName } = state;
    let rightTitle = (params && params.rightTitle) || '';
    let rightClick = (params && params.rightClick) || null;
    let rightUI = null;
    switch (routeName) {
        default:
            rightUI = <View style={[styles.defBtnWrapper, styles.rightWrapper, { paddingLeft: 6 }]}>
                <TouchableOpacity style={styles.defBtn} onPress={() => rightClick && rightClick()}>
                    <Text style={{ fontSize: 16, color: '#00A8FF' }} >{rightTitle}</Text>
                </TouchableOpacity>
            </View>
    }
    return rightUI;
}

//自定义顶部导航
const renderHeaderNav = ({ navigation }) => {
    const { state } = navigation;
    const { params, routeName, index } = state;
    console.log('rrrrrrrrrr', navigation);
    let headerUI = null;
    switch (routeName) {
        // case 'Home':
        //     headerUI = null;
        //     break;
        default:
            headerUI = <View style={styles.headerStyle}>
                {renderLeftButton(navigation)}
                {renderCenter(navigation)}
                {renderRightButton(navigation)}
            </View>
    }
    return headerUI;
}

const styles = StyleSheet.create({

    headerStyle: {
        height: 64,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderBottomColor: '#E6E6E6'
    },
    defBtnWrapper: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#fff'
    },
    defBtn: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },

    centerWrapper: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 40,
    },
    rightWrapper: {
        paddingLeft: 0,
        justifyContent: 'center',
    },
    centerText: {
        fontSize: 17,
        color: '#2C2C2C'
    },
    search: {
        position: 'absolute',
        width: 14,
        height: 14,
        left: 10, top: 9
    },
    headerRight: {
        color: "#00A8FF",
        fontSize: 16,
    }
});

module.exports = { renderHeaderNav }