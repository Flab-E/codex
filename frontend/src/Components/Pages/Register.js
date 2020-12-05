import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component {

    state = {
        username: '',
        password: ''
    }

    dataChange = (e) => {
        this.setState(
            {[e.target.name]: e.target.value}
        );
    }

    render() {
        return (
            <div>
                <h1 style={headingStyle}>Register</h1>
                <div className="formclass" style={formStyle}>
                    <label htmlFor="newusername">New username</label><input type="text" name="username" id="newusername" onChange={this.dataChange} />

                    <label htmlFor="newpassword">New password</label><input type="password" name="password" id="newpassword" onChange={this.dataChange} />
                    
                    <button id="registerbutton" onClick={this.props.handleRegister}><Link to="/Login" id="reglink">Register</Link></button>
                </div>
            </div>
        );
    }
}

const headingStyle = {
    textAlign: 'center',
    backgroundColor: "black",
    color: '#FFFBFF',
    padding: '0.8em'
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#190E4F',
    margin: '5em 20em',
    textAlign: 'center',
    borderRadius: '8px',
    paddingTop: '0.3em'
}

export default Register;