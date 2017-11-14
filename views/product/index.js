import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state={
            isEdit:false
        }
    }
    componentDidMount() {

    }

    setLeftBtnEvent = () => {
        this.props.navigation.setParams({
            leftClick: () => {
                alert('设置返回按钮');
            }
        })
    }
    recoveryLeftBtnEvent = () => {
        this.props.navigation.setParams({
            leftClick: null
        })
    }
    setRightBtnEvent = () => {
        this.props.navigation.setParams({
            rightClick: () => {
                this.setState({isEdit:!this.state.isEdit},()=>{
                    this.props.navigation.setParams({
                        rightTitle:this.state.isEdit?'取消':'编辑'
                    })
                })
            }
        });
    }

    render() {
        return <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.btn} onPress={this.setRightBtnEvent}>
                    <Text style={[styles.btnText]}>设置右侧按钮事件</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.mt20]} onPress={this.setLeftBtnEvent.bind(this)}>
                    <Text style={[styles.btnText]}>设置返回按钮事件</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.mt20]} onPress={this.recoveryLeftBtnEvent}>
                    <Text style={[styles.btnText]}>恢复返回按钮事件</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        height: 40,
        backgroundColor: '#3eccf5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 20
    },
    mt20: {
        marginTop: 20
    }
});