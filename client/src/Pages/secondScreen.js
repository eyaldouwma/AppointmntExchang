import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';
import './second.css';

class SecondScreen extends Component{
    constructor(props) {
        super(props)
        this.state= {
            daysList: new Array(7),
            monthsList : [] ,
            fromTime :'',
            untilTime :'',
            /*sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday : false*/
        }
        this.handleTime = this.handleTime.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        
    }

    handleChange = (event) =>{
        const {id, checked} = event.target;
        let daysList = [...this.state.daysList];
        let day = {...daysList[id]};
        day = checked;
        daysList[id] = day;
        this.setState({daysList});
    }
        
    
    /*handleChange2(event) {
        const {id , checked} = event.target
            this.setState(
            {
                    [daysList[id]] : checked
                }) 
    }*/

    handleTime(event, time){
        console.log(time);
        this.setState(
            {name : time})
    }

    render()
    {     
        return(
            <div className="container">
                <h1>tell us when you are available for new appointment</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                    <br/>
                    from :<TimePicker name = "fromTime" onChange={this.handleTime} value={this.state.fromTime}  />
                    to :<TimePicker name = "untilTime" onChange={this.handleTime} value={this.state.untilTime}  />
                    <br/>
                    <label>
                        <input 
                            type="checkbox"
                            id = '0'
                            onChange={this.handleChange}
                            checked={this.state.daysList[0]}
                        /> Sunday
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id = '1'
                            onChange={this.handleChange}
                            checked={this.state.daysList[1]}
                        /> Monday
                    </label>
                    <label>
                        <input 
                         type="checkbox"
                            id ='2'
                            onChange={this.handleChange}
                            checked={this.state.daysList[2]}
                        /> Tuesday
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id='3'
                            onChange={this.handleChange}
                            checked={this.state.daysList[3]}
                        /> Wednesday 
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id='4'
                            onChange={this.handleChange}
                            checked={this.state.daysList[4]}
                        /> Thursday
                     </label>
                    <label>
                        <input 
                            type="checkbox"
                            id='5'
                            onChange={this.handleChange}
                            checked={this.state.daysList[5]}
                        />  Friday  
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            id= '6'
                            onChange={this.handleChange}
                            checked={this.state.daysList[6]}
                        /> Saturday 
                    </label>
                    <br/> 
                    <button type="submit" id="-">Login</button>
                    </form>   
            </div> 
        )
    }

}

export default SecondScreen