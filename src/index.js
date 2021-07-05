import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database';
import './style.css';

    var firebaseConfig = {
        apiKey: "AIzaSyDA7YqFNN_LHwwa0YNb68rJ9O0Jf0X5c9I",
        authDomain: "simonicwebsite.firebaseapp.com",
        projectId: "simonicwebsite",
        storageBucket: "simonicwebsite.appspot.com",
        messagingSenderId: "1029659588944",
        appId: "1:1029659588944:web:06bef571efeb0b3cdd5455",
        measurementId: "G-Z9PL5V435M"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));