import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './fireBaseConfig';


class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
