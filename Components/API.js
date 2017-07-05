/**
 * Created by Денис on 05.07.2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class API extends Component {

    func(method,url){
        var promise;
        const apiBaseUrl = 'http://jsonplaceholder.typicode.com'
        var headers = {
            'Accept': 'application/json',
            //'Authorization': 'Bearer ' + this.token,
            'Content-type': 'application/json',
            'Accept-Language': 'ru-RU'
        };
        switch (method) {
            case METHOD_GET:
                promise = fetch(this.apiBaseUrl + url , {
                    method: METHOD_GET,
                    headers: headers
                });
                break;
            case METHOD_DELETE:
            case METHOD_POST:
                promise = fetch(this.apiBaseUrl + url, {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(params)
                });
                break;
            default:
                throw new Error('Не поддерживаемый метод.');
        }
        return new Promise(function (resolve,reject) {
            promise.then(response => {
                return response.text();
            }).then(text => {
                return JSON.parse(text);
            }).then(json => {
                return json;
            }).then(jsonData=>{
                resolve(jsonData);
            })
        });

    }
    render() {
        return (
            <Text>{()=>this.func(METHOD_GET,'/posts')}</Text>
        );
    }
}

//AppRegistry.registerComponent('Hey', () => Hey);
