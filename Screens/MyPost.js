/**
 * Created by Денис on 02.07.2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';

export default class MyPost extends Component {
    static navigationOptions = {
        title:'My Post'
    };

    constructor(){
        super();
        this.state ={
            textValue : 'Hello!'
        }
    }

    onChangeText(value) {
        this.setState ({
            textValue: value
        });
    }

    onPressButton(){
        /*fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'this.state.textValue',
            })
        })*/
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{margin:10}}>
                    <TextInput placeholder="Post something..."
                               style={styles.input}
                               onChangeText={(value) => this.onChangeText(value)}/>
                </View>
                <View>
                    <Button title="POST" color='#191970' onPress={
                        ()=>{}
                    }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:30,
        flexDirection:'column',
    },
    input: {
        height: 120,
        backgroundColor: '#F0FFFF',
    }
});


//AppRegistry.registerComponent('MyPost', () => MyPost);