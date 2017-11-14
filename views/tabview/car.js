import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class TabCar extends Component {
    constructor(props) {
        super(props);
        this.state={
            btnName:'My'
        }
    }
    componentDidMount(){
      
    }
    componentWillUnmount(){
     
    }
    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>车辆管理</Text>
            </TouchableOpacity>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    btn:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5edcfb'
    },
    btnText:{
        fontSize:20,
        color:'#fff'
    }
});