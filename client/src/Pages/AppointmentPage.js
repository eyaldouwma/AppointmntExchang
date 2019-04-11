import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Button  from '@material-ui/core/Button';
import './appoint.css'

import "react-datepicker/dist/react-datepicker-cssmodules.css";

class AppointScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            datePicked: false,
            date: new Date(),
            datesToSwitch: [new Date('2019,4,14').toLocaleDateString(),new Date('2019,4,15').toLocaleDateString(),new Date('2019,4,16').toLocaleDateString()]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({date:date});
        this.state.datesToSwitch.forEach(item => console.log(item));
        if (this.state.datesToSwitch.includes(date.toLocaleDateString()))
        {
           this.setState({datePicked: true}); 
        }
        else
        {
            this.setState({datePicked: false});
        }
    }

    render() {
        let menu = 
        <div>
            <ul className="list">
                <li>15:00 <Button variant="contained" color="primary">Appoint</Button></li>
                <li>16:20 <Button variant="contained" color="primary">Appoint</Button></li>
            </ul>
        </div>
        const arr = [{"color":[new Date('2019,4,14'),new Date('2019,4,15'),new Date('2019,4,16')]}]
        return (
            <div>
                <DatePicker selected={this.state.date} onChange={this.handleChange} showMonthDropdown 
                    highlightDates={arr} inline
                    />
                {this.state.datePicked ? menu : null}           
            </div>
        )

    }

}

export default AppointScreen