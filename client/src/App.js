import React, { Component } from 'react';
import './App.css';
import RegScreen from './Pages/registrationScreen';
import AppointScreen from './Pages/AppointmentPage';
import { BrowserRouter, Route } from "react-router-dom";
import SecondScreen from './Pages/secondScreen';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      appintmants: [],
      doctors: []
    }
  }

  getDoctorsFromDB() {

    const doctorsRes = firebase.database().ref('doctors');

    doctorsRes.on('value', (snapshot) => {
      let doctors = snapshot.val();
      let newStateDoc = [];
      for (let doctor in doctors)
        newStateDoc.push({
          id: doctor,
          doc_full_name: doctors[doctor].doc_full_name,
          e_type: doctors[doctor].e_type
        });

      this.setState({
        doctors: newStateDoc
      });
    });



  }

  getApointmentsFromDB() {
    const apoRes = firebase.database().ref('appointments');

    apoRes.on('value', (snapshot) => {
      let apointments = snapshot.val();
      let newStateApo = [];
      for (let apo in apointments) {
        newStateApo.push({
          id: apo,
          date: apointments[apo].date,
          doctor_id: apointments[apo].doctor_id,
          location: apointments[apo].location,
          start_time: apointments[apo].start_time,
          switchable: apointments[apo].switchable
        });
      };
      this.setState({
        appintmants: newStateApo
      },()=>this.getUserFromDB());

    })


  }

  getUserFromDB() {
    const userRes = firebase.database().ref('users');

    userRes.on('value', (snapshot) => {
      let users = snapshot.val();
      let newStateUsers = [];
      for (let user in users) 
      {
        newStateUsers.push(
        {
          id: user,
          first_name: users[user].first_name,
          last_name: users[user].last_name,
          mail: users[user].email,
          appointment_list: users[user].appointment_list

        });

      }

      this.setState({
        users: newStateUsers
      },()=>this.haraGadol());
    });



  }

  haraGadol() {

    console.log('heeeeeeeeeeee');
    console.log(this.state.users);
    
    this.state.users.forEach(item0 => {
      if (item0.appointment_list !==undefined) {
        console.log('name ' + item0.first_name + ' ' + item0.last_name + ' and my next appointments: ');
        item0.appointment_list.forEach(item => {
          this.state.appintmants.forEach(item2=> {
            if(item2.id === item)
            {
              console.log(item2.location);
            }
          })
        })
      }
    })
    
  }

  componentDidMount() {

    this.getDoctorsFromDB();
    this.getApointmentsFromDB();

  }

  render() {

    return (
      <BrowserRouter>
        <Route path='/' component={RegScreen} exact />
        <Route path='/appointment' component={AppointScreen} />
        <Route path='/secondScreen' component={SecondScreen} />
      </BrowserRouter>
    );
  }

   /*getAppointmentList() {
     firebase.database().ref('users').on('child_added', (snapshot) => {

     }*/
}

  export default App;
