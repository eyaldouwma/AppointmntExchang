import React, { Component } from 'react';
import './App.css';
import RegScreen from './Pages/registrationScreen';
import AppointScreen from './Pages/AppointmentPage';
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {

  componentDidMount() {
    
  }

  
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={RegScreen} exact/>
        <Route path='/appointment' component={AppointScreen}/>
      </BrowserRouter>
    );
  }
}

export default App;
