import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/add_days';

import "react-datepicker/dist/react-datepicker-cssmodules.css";


class AppointScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <DatePicker selected={this.state.date} showMonthDropdown 
                highlightDates={[new Date('2019,4,14'), addDays(new Date(), 7)]}/>
        )
    }

}



export default AppointScreen