/**
 * Created by Денис on 30.06.2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TextInput,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';

import  MyPost from './MyPost'
import postDetails from './postDetails'
import FloatButton from 'C:/NewProject/Components/FloatButton'

export default class Post extends Component {

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            numberOfLines: 3
        };
    }

    static navigationOptions = {
        title:"Posts"
    }
componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) =>
            {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),
                });
            });
    }

    onPress(){
        this.props.navigation.navigate('Profile')
    }

    onPressDetails(post){
        this.props.navigation.navigate('Details',{body:post.body})
    }
    renderPost(post){
        return(
            <TouchableOpacity onPress={()=>this.onPressDetails(post)} >
            <View style={styles.postMain}>
                <View style={styles.postHeader}>
                    <View>
                        <Text style={{color:'red'}}>Name</Text>
                    </View>
                    <View>
                        <Text>Date</Text>
                    </View>
                </View>
                <View style={styles.postText}>
                    <Text style={styles.textStyle} numberOfLines={this.state.numberOfLines} >{post.userId}:{post.body}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.background}>
                <Button onPress={()=>this.onPress()} title="SHARE"/>
                    <ListView dataSource={this.state.dataSource}
                              renderRow={this.renderPost.bind(this)}
                    />
                <View><FloatButton/></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex:1,
      backgroundColor: '#add8e6',
    },
    postMain : {
        flexDirection: 'column',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        marginBottom:10,
        backgroundColor: 'white'
    },
    postHeader: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingRight: 6,
        paddingLeft:6,
        paddingTop:3,
        backgroundColor:'#dcdcdc'
    },
    postText: {
        flex:5,
        padding:4,
        backgroundColor:'#F0FFFF'
    },
    textStyle: {
        color:'black'
    }
});

//AppRegistry.registerComponent('Post', () => Post);