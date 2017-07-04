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

export default class postDetails extends Component {
    constructor(props) {
        super(props);
        this.state=this.props.navigation.state.params
    }

    static navigationOptions = {
        title:"Details"
    }
    render() {
        return (
            <View style={styles.background}>
                <View style ={styles.postMain}>
                    <View style={styles.postHeader}>
                        <View>
                            <Text style={{color:'red'}}>Name</Text>
                        </View>
                        <View>
                            <Text>Date</Text>
                        </View>
                    </View>
                    <View style={styles.postText} >
                        <Text>{this.state.body}</Text>
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
        alignItems:'center'
    },
    postMain : {
        flexDirection: 'column',
        //flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
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
        //flex:1,
        justifyContent: 'space-between',
        //alignItems: 'stretch',
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
