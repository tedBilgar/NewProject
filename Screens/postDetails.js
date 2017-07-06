/**
 * Created by Денис on 03.07.2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
let API = require('../Components/API');

const apiBaseUrl = 'http://jsonplaceholder.typicode.com';

export default class postDetails extends Component {
    constructor(props) {
            super(props);
            this.state= {id:this.props.navigation.state.params.id,
            post:{body:''}
        }
    }

    static navigationOptions = {
        title:"Details"
    };
    componentDidMount(){
        API.getPosts(this.state.id)
            .then((responseJsone) =>
            {
                this.setState({
                    post: responseJsone
                });
            });
    }

    render() {
        return (
            <View style={styles.background}>
                <View>
                    <Text style={{color:'blue',fontSize:48,fontFamily: 'Cochin'}}>Name's Post</Text>
                </View>
                <View style ={styles.postMain}>
                    <View style={styles.postHeader}>
                        <View>
                            <Text style={{color:'red'}}>Name</Text>
                        </View>
                        <View>
                            <Text>Date</Text>
                        </View>
                    </View>
                    <View style={styles.postText}>
                        <Text style={{color:'black',fontSize:24}}>{this.state.post.body}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background:{
      flex:1,
        backgroundColor: '#add8e6',
        justifyContent:'center',
        //alignItems:'center'
    },
    postMain : {
        flexDirection: 'column',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        marginBottom:10,
        backgroundColor: 'white',
        borderRadius:7,
        borderWidth:1,
        borderColor:'transparent'
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 6,
        paddingLeft:6,
        paddingTop:3,
        backgroundColor:'#dcdcdc',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        borderWidth:1,
        borderColor:'transparent'
    },
    postText: {
        //flex:2,
        padding:4,
        backgroundColor:'#F0FFFF',
        borderBottomLeftRadius:7,
        borderBottomRightRadius:7,
        borderWidth:1,
        borderColor:'transparent'
    }
});
