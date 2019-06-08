import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAO1jbRZAvxBXGBlTJJ1EqpLMRYqDtbpqU",
    authDomain: "fir-react-b36d8.firebaseapp.com",
    databaseURL: "https://fir-react-b36d8.firebaseio.com",
    projectId: "fir-react-b36d8",
    storageBucket: "fir-react-b36d8.appspot.com",
    messagingSenderId: "910849677808",
    appId: "1:910849677808:web:b1bc341ee075bf83"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render( <App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();