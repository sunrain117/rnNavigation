import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import { renderHeaderNav } from '../common/navConfig';
import TabApp from '../common/tabNavConfig';

import Home from './home';
import ProductList from './product/index';

export default AppNav = StackNavigator({
    Tab:{
        screen:TabApp
    },
    Home: {
        screen: Home,
        navigationOptions: ({ navigation ,screenProps}) => ({
            header: renderHeaderNav({ navigation }),
            gesturesEnabled: false,//是否允许滑动切换页面，ios默认为true，android默认为false
        })
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: ({ navigation ,screenProps}) => ({
            header: renderHeaderNav({ navigation }),
            gesturesEnabled: false,//是否允许滑动切换页面，ios默认为true，android默认为false
        })
    }
}, {
        initialRouteName: 'Tab',//默认初始路由指向页面
        mode: 'card',
        headerMode: 'screen',////float：iOS默认的效果，可以看到一个明显的过渡动画。screen：滑动过程中，整个页面都会返回。none：没有动画。
        transitionConfig: () => {
            return {
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            }
        },
       
    }
)


