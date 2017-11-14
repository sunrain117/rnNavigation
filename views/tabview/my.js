import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class TabMy extends Component {
    constructor(props) {
        super(props);
        this.state={
            btnName:'My'
        }
    }
    outEvent=()=>{
        alert('确认退出么？');
    }
    componentDidMount(){
        this.props.navigation.setParams({outEvent:this.outEvent})
         this.timer=setTimeout(()=>{
             this.setState({btnName:'TabMyTime'});
         },2000);
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>{this.state.btnName}</Text>
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