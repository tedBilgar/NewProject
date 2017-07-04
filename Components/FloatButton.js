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

export default class FloatButton extends Component {

    onClick(){
        Alert.alert('Tapped')
    }

    render() {
        return (
            <TouchableOpacity>
                <Image source={require('C:/NewProject/img/plus.png')}/>
            </TouchableOpacity>
        );
    }
}

//AppRegistry.registerComponent('FloatButton', () => FloatButton);
