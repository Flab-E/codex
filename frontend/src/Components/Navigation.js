import React from 'react';
import {Link} from 'react-router-dom'

class Navigation extends React.Component {

    render() {

        const isLoggedIn = this.props.isLoggedIn;
        let button1, button2, mainButton;

        if (!isLoggedIn) {
            button1 = <LoginButton onClick={this.props.onLogin} />;
            button2 = <RegisterButton onClick={this.props.onRegister} />;
            mainButton = <Link to="/"><h3 id="title">CODEX.io</h3></Link>
        } else {
            button1 = <LogoutButton onClick={this.props.onLogout} />;
            button2 = <AboutButton />;
            mainButton = <Link to="/MainPage"><h3 id="title">CODEX.io</h3></Link>
        }

        return (
            <div>
                <nav>
                    {/* <Link to="/"><h3 id="title">CODEX.io</h3></Link> */}
                    {mainButton}

                    <ul className="nav-links">
                        {button1}
                        {button2}
                    </ul>
                </nav>
            </div>
        );
    }
}

class LoginButton extends React.Component {
    render() {
        return (
            <Link to="/Login"><h3><li>Login</li></h3></Link>
        );
    }
}

class RegisterButton extends React.Component {
    render() {
        return (
            <Link to="/Register"><h3><li>Register</li></h3></Link>
        );
    }
}

class LogoutButton extends React.Component {
    render() {
        return (
            <Link to="/" onClick={this.props.onClick}><h3><li>Logout</li></h3></Link>
        );
    }
}

class AboutButton extends React.Component {
    render() {
        return (
            <Link to="/About"><h3><li>About</li></h3></Link>
        );
    }
}

export default Navigation;