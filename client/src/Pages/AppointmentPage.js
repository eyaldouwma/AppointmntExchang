import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Button  from '@material-ui/core/Button';
import './appoint.css'
import firebase from '../firebase';

import "react-datepicker/dist/react-datepicker-cssmodules.css";


class AppointScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            hours: [],
            appintmants: [],
            doctors: [],
            datePicked: false,
            date: new Date(),
            datesToSwitch: [],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({date:date.toLocaleDateString()});
        let isBool = false;
        this.state.datesToSwitch.forEach(item => {
            if (date.toLocaleDateString() === item.date)
            {
                isBool = true;
                this.setState({datePicked: true});
            }
        })
        if (!isBool)
        {
            this.setState({datePicked: false})
        }
        console.log('sdfsf')
    } 

    componentDidMount() {
        this.getDoctorsFromDB();
        this.getApointmentsFromDB();
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
          let theDates = [];
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
          newStateApo.forEach(item => {
                let item2 = {
                    date: '',
                    hour: '',
                }
                item2.date = item.date;
                item2.hour = item.start_time;
                theDates.push(item2);
          });

          this.setState({
            appintmants: newStateApo,
            datesToSwitch: theDates,
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

    render() {
        let hours = this.state.datesToSwitch.map(item => {
           if (item.date === this.state.date)
           {
               return <li>{item.hour}<Button variant="contained" color="primary">Appoint</Button></li>
           }
        })
        let menu = 
        <div className="menu">
            <ul className="list">
              {hours}
            </ul>
        </div>

        const meturgam = this.state.datesToSwitch.map(item => {
            console.log(item.date);
            return new Date(item.date);
        })
        const arr = [{"color":meturgam}]
        return (
            <div className="container">
                <div className="calendar">
                    <DatePicker selected={new Date(this.state.date)} onChange={this.handleChange} showMonthDropdown 
                        highlightDates={arr} inline
                        />
                </div>
                {this.state.datePicked ? menu : null}           
            </div>
        )

    }

}



export default AppointScreen