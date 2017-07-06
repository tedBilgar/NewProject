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
const apiBaseUrl = 'http://school.is74.ru/api';
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
class API {

    func(method,url,params){
        let promise;
        let headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Accept-Language': 'ru-RU',
            'Authorization': 'Bearer ' + this.token
        };
        switch (method) {
            case METHOD_GET:
                promise = fetch(apiBaseUrl + url, {
                    method: METHOD_GET,
                    headers: headers
                });
                break;
            case METHOD_POST:
                promise = fetch(apiBaseUrl + url, {
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
            }).catch(e => {
                throw new Error('Response parsing error. ' + e.message);
            }).then(json => {
                return json;
            }).then(jsonData=>{
                resolve(jsonData);
            })
        });

    }
    getPosts(id=null) {
        return this.func(METHOD_GET,'/posts'+(id?'/'+id:''));
    }
    newPost(params){
        return this.func(METHOD_POST,'/posts',params);
    }
    setToken(){
        this.token ='3e5181d5e5320e1115ab3457ef23ce2708a84f571e43a712d37f656250f52e52';
    }
}

module.exports = new API;