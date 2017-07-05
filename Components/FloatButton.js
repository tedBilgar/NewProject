/**
 * Created by Денис on 04.07.2017.
 */
/*
onClick
size
backgroundColor
icon
 https://material.io/guidelines/components/buttons-floating-action-button.html#
 https://materialdesignicons.com/
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';

const MIN_SIZE = 24;
const MAX_SIZE = 56;

export default class FloatButton extends Component {

    constructor(props){
        super(props);
        this.state={
            color:this.props.color,
            size: this.props.size,
            onPress: this.props.onPress,
            icon: this.props.icon
        }
    }

    render() {
        let size = this.state.size;
        if(size<MIN_SIZE) size = MIN_SIZE;
        if(size>MAX_SIZE) size = MAX_SIZE;

        const style = StyleSheet.create({
            button:{
                backgroundColor: this.state.color,
                borderRadius:size,
                height:size*2,
                width:size*2
            }
        });
        return (
            <TouchableOpacity onPress={this.state.onPress} style={[styles.touchZone,style.button]} >
                <Image source={this.state.icon} style={{width:size*2, height:size*2}}/>
            </TouchableOpacity>
        );
    }
}
FloatButton.defaultProps = {
    color : 'blue',
    size: 100,
    onPress: ()=>{return false;},
    icon: 'null'
};
const styles = StyleSheet.create({
    touchZone:{
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

//AppRegistry.registerComponent('FloatButton', () => FloatButton);
