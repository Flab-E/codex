import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import MainPage from './Components/Pages/MainPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DDCO, DSA, SDS, WT, AFLL} from './Components/Pages/Classrooms';
import About from './Components/Pages/About'
import axios from "axios";

class App extends React.Component {

  state = {
    userData: {
        'username': 'None',
        'password': 'None'
    },
    isLoggedIn: false,
    isRegistered: false
  }

  handleRegister = () => {
    var ele_status = document.getElementById('statusdiv')
    var ele_id = document.getElementById('newusername');
    var ele_pass = document.getElementById('newpassword');
    var put_query = `http://localhost:8080/api/put/user/${ele_id.value}/pass/${ele_pass.value}`;
    var get_query = `http://localhost:8080/api/get/user/${ele_id.value}/pass/${ele_pass.value}`;
    
    if((ele_id.value.length>20) || (ele_id.value.length<6)) {
      ele_status.innerHTML = "<p>username field must cintain at least 6 characters and at most 20 characters</p>";
    } else if((ele_pass.value.length>20) || (ele_pass.value.length<6)) {
      alert("password field must contain at least 6 characters and at most 20 characters")
    } else {
      axios.get(get_query).then(getres => {
        if(getres.data === ""){
          axios.get(put_query).then(putres => {
            console.log(putres.data);
            if(putres.data.ok) {
                this.setState({isRegistered: true});
            }
            else return;
          }).then(err => {
              console.log(err);
          });

          ele_status.innerHTML = "<p>Registration complete!</p>"
        } else {
          ele_status.innerHTML ='<p>username and password exists';
        }
        console.log(getres);
      });
    }
  }
    

  onLogout = () => {
    this.setState({isLoggedIn: false});
  }

  render() {

    return (
      <Router>
        <Navigation isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}
        onLogout={this.onLogout} onRegister={this.onRegister} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" render={({history}) => (<Login handleLogin={() => {
            var user_ele = document.getElementById('username');
            var pass_ele = document.getElementById('password');
            var query = `http://localhost:8080/api/get/user/${user_ele.value}/pass/${pass_ele.value}`;

              console.log(user_ele.value)
              console.log(pass_ele.value)

              axios.get(query).then(result => {
                  console.log(result)
                  if(result.data === ""){
                      alert("invalid username and password");
                      return;
                  } else {
                      history.push('/Mainpage');
                      this.setState({isLoggedIn: true});
                  }
              }).then(err => {
                  console.log(err);
              });

          } } />)} />
          <Route path="/Register" render={(props) => (<Register handleRegister={this.handleRegister} />)} />
          <Route path="/Mainpage" component={MainPage} />
          <Route path="/DDCO" component={DDCO}/>
          <Route path="/DSA" component={DSA} />
          <Route path="/SDS" component={SDS} />
          <Route path="/WT" component={WT} />
          <Route path="/AFLL" component={AFLL} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
