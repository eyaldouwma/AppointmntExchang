import React, { Component } from 'react';
import Calendar from 'react-calendar';


class AppointScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: ''
        }
    }

    render() {
        return (
            <Calendar />
        )
    }

}

export default AppointScreen