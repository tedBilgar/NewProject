/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,} from 'react-navigation'

import Posts from './Screens/Posts'
import Hey from './Screens/Hey'
import MyPost from './Screens/MyPost'
import postDetails from './Screens/postDetails'

const App = StackNavigator({
    Home: { screen: Posts },
    Profile: { screen: MyPost },
    Details: { screen: postDetails}
});

export default class NewProject extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('NewProject', () => NewProject);
