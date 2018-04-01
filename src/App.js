import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAPzBkCNdmBbvNNV_qfpukzT-kV5DksusU',
            authDomain: 'authentication-9da30.firebaseapp.com',
            databaseURL: 'https://authentication-9da30.firebaseio.com',
            projectId: 'authentication-9da30',
            storageBucket: 'authentication-9da30.appspot.com',
            messagingSenderId: '761181634391'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
