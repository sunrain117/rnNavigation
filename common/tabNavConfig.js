import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ImageManage from './imageManage';

import TabHome from '../views/tabview/home';
import TabMy from '../views/tabview/my';
import TabCar from '../views/tabview/car'


export default myApp = TabNavigator({
    TabHome: {
        screen: TabHome,
        //navigationOptions: ({ navigation, screenProps }) => tabConfigFn({ navigation, screenProps })
    },
    TabCar: {
        screen: TabCar,
        //navigationOptions: ({ navigation, screenProps }) => tabConfigFn({ navigation, screenProps })
    },
    TabMy: {
        screen: TabMy,

    }
}, {
        tabBarPosition: 'bottom',//ios 默认bottom，android 默认top
        swipeEnabled: false,//是否允许手指滑动切换tab
        initialRouteName: 'TabHome',//默认显示的tab
        animationEnabled: false,//tab切换时是否允许动画
        lazy: true,//是否允许其他选项按需加载还是提前加载
        tabBarOptions: {
            //IOS属性

            activeTintColor: '#11b0ff',
            activeBackgroundColor: '#fff',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor: '#fff',

            //  公共属性
            labelStyle: {
                fontSize: 12
            },
            style: {
                backgroundColor: '#fff'
            },
            //android 属性

            // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
            // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
            showIcon: true, // 是否显示图标，默认关闭。
            // showLabel:true, //是否显示label，默认开启。
            // style:{}, // tabbar的样式。
            // labelStyle:{}, // label的样式。
            upperCaseLabel: false, // 是否使标签大写，默认为true。
            // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
            // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
            // scrollEnabled:false, // 是否启用可滚动选项卡。
            // tabStyle:{}, // tab的样式。
            indicatorStyle: {
                height: 0
            }, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
            // labelStyle:{}, // label的样式。
            // iconStyle:{}, // 图标的样式。
        },
        navigationOptions: ({ navigation, screenProps }) => tabConfigFn({ navigation, screenProps })
    }
)



const tabConfigFn = ({ navigation, screenProps }) => {
    let routeName = navigation.state.routeName;
    let config = {};
    config.headerStyle = {
        backgroundColor: '#4ECBFC'
    };
    config.headerTitleStyle = {
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'
    };
    config.tabBarVisible = true;
    config.tabBarIcon = null;

    switch (routeName) {
        case 'TabHome':
            config.tabBarLabel = '主题';
            config.headerTitle = "主题";
            config.tabBarIcon = (({ focused, tintColor }) => {
                return (
                    <Image source={!focused ? ImageManage.tabIcon.home.nomal : ImageManage.tabIcon.home.active} style={[{ height: 30, width: 30 }, { tintColor: tintColor }]}></Image>
                )
            });
            //config.tabBarOnPress=(({ route, index },jumpToIndex)=>{ 旧版本的写法
            config.tabBarOnPress = (({ previousScene, scene, jumpToIndex }) => {
                const { route, index } = scene;
                alert(route.routeName + ":" + index);
                // 只有调用jumpToIndex方法之后才会真正的跳转页面。
                jumpToIndex(index);
            });
            break;
        case 'TabCar':
            config.tabBarLabel = '车辆管理';
            config.headerTitle = "车辆管理";
            config.tabBarIcon = (({ focused, tintColor }) => {
                return (
                    <Image resizeMode="stretch" source={!focused ? ImageManage.tabIcon.car.nomal : ImageManage.tabIcon.car.active} style={[{ height: 30, width: 30 }, { tintColor: tintColor }]}></Image>
                )
            });
            // config.tabBarOnPress=(({ route, index },jumpToIndex)=>{ 
            //     alert(route.routeName+":"+index);
            //     // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            //     jumpToIndex(index);
            // });
            break;
        case 'TabMy':
            config.tabBarLabel = '我的';
            config.headerTitle = "我的";
            config.headerRight = (
                <Text style={{ color: 'red', marginRight: 20 }} onPress={() => navigation.state.params.outEvent && navigation.state.params.outEvent()}>退出</Text>
            );
            config.tabBarIcon = (({ focused, tintColor }) => {
                return (
                    <Image resizeMode="stretch" source={!focused ? ImageManage.tabIcon.my.nomal : ImageManage.tabIcon.my.active} style={[{ height: 30, width: 30 }, { tintColor: tintColor }]}></Image>
                )
            });
            break;
        default:
            config.header = null;
    }
    return config
}
