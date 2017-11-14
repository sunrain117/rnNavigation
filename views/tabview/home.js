import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class TabHome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={styles.btn}  onPress={()=>{this.props.navigation.navigate('Home',{centerTitle:'Home'})}}>
                <Text style={styles.btnText}>点击进入Home</Text>
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