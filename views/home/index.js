import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <View style={{justifyContent:'center'}}>
                <TouchableOpacity style={styles.btn}  onPress={()=>{
                    this.props.navigation.navigate('ProductList',{centerTitle:'功能列表',rightTitle:'编辑'})
                }}>
                    <Text style={styles.btnText}>进入功能列表页</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn,{marginTop:10}]}  onPress={()=>{
                    this.props.navigation.goBack();
                }}>
                    <Text style={styles.btnText}>返回主页</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    btn:{
        height:40,
        backgroundColor:'#3eccf5',
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:'#fff',
        fontSize:20
    }
});