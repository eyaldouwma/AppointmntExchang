import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../fireBaseConfig';
import { Redirect } from 'react-router-dom';
import './reg.css';


class RegScreen extends Component{

    constructor(props) {
        super(props)
        this.state= {
            username:'',
            password:'',
            firebaseState: '',
            usernotfound: false,
            successlogin: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        this.setState({firebaseState: firebase});

    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
        
    }

    handleSubmit(event) {

        event.preventDefault();

        this.state.firebaseState.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(user => {
           this.setState({successlogin: true})
        }).catch(error => {
                this.setState({usernotfound: true, username:'', password:''});  
        })
    }

    render()
    {    
        let nextPage = this.state.successlogin ? <Redirect to='/appointment'/> : 
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input name="username" type="email" value={this.state.username} onChange = {this.handleChange} placeholder = "E-Mail" /> 
                        <input name="password" type="password" value={this.state.password} onChange = {this.handleChange} placeholder = "Password"/> 
                        <button type="submit" id="login-button">Login</button>
                    </form>
                    <label>Forgot Password?</label>
                    {this.state.usernotfound && <label style={{color:'red'}}>User Not Found</label>}        
                </div>

                <ul class="bg-bubbles">
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
	            </ul>
            </div>
        return(
            <div className="container1">
                {nextPage}
           </div>
        )
    }

}

export default RegScreen

