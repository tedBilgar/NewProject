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
let API = require('../Components/API');

export default class MyPost extends Component {
    static navigationOptions = {
        title:'My Post'
    };

    constructor(){
        super();
        this.state ={
            textValue : 'Hello!',
            data:{}
        }
    }

    onChangeText(value) {
        this.setState ({
            textValue: value
        });
    }

    onPressButton(){
       /* fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'this.state.textValue',
            })
        });*/
       API.setToken();
        API.newPost({content:this.state.textValue})
            .then(data=> {
                this.setState({
                    data: data
                })
            })
            .catch(e=>{});
    }

    render() {
        return (
            <View style={styles.background}>
            <View style={styles.container}>
                <View style={{margin:10}}>
                    <TextInput placeholder="Post something..."
                               style={styles.input}
                               value={this.state.textValue}
                               onChangeText={(value) => this.onChangeText(value)}/>
                </View>
                <View>
                    <Button title="POST" color='#191970' onPress={
                        ()=>{this.onPressButton()}
                    }/>
                    <Text>{JSON.stringify(this.state.textValue)}</Text>
                    <Text>{JSON.stringify(this.state.data)}</Text>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#add8e6'
    },
    container: {
        padding:30,
        flexDirection:'column'
    },
    input: {
        height: 120,
        backgroundColor: '#F0FFFF',
    }
});


//AppRegistry.registerComponent('MyPost', () => MyPost);