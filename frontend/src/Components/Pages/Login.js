import React from 'react';

class Login extends React.Component {

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
                <h1 style={headingStyle}>Login</h1>
                <div style={formStyle}>
                    <label htmlFor="username">Username</label><input type="text" name="username" id="username" onChange={this.dataChange} />

                    <label htmlFor="password">Password</label><input type="password" name="password" id="password" minLength="4" onChange={this.dataChange} />

                    <button id="loginbutton" onClick={this.props.handleLogin}>Login</button>

                    <div id="statusdiv" style={{color: '#fffbff'}}></div>
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

export default Login;