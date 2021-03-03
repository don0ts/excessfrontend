//dependencies
import React, { Component } from 'react';
import "./App.css";
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Home from './components/Home';
import Navbar from "./components/navbar";
// import AcademyList from "./components/academy-list";
// import EditAcademy from "./components/edit-academy";
// import CreateAcademy from "./components/create-academy";
import PlayerList from "./components/player-list";
import EditPlayer from "./components/edit-player";
import CreatePlayer from "./components/create-player";
import GreetingsPage from "./components/thankyou";
// import Login from "./components/Login";
// import LoginPrompt from './components/LoginPrompt';
// import Register from "./components/Register";
// import PrivateRoute from './components/private-route/PrivateRoute';

// particlesjs
const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Particles className="particles" params={particlesOptions} />

          <Router>
            <div>
              <Navbar />
              <div className='container'>
                <br />
                <br />
                <Switch>
                  {/* <Route exact path='/'><Redirect to="/login/" /></Route>
                  <Route path="/login/" component={Login} />
                  <Route path='/loginprompt' component={LoginPrompt} /> */}
                  <Route path="/home/" component={Home} />
                  {/* <PrivateRoute path="/register/" component={Register} /> */}
                  <Route path="/players/create/" component={CreatePlayer} />
                  <Route path="/players/edit/:id/" component={EditPlayer} />
                  {/* <Route path="/academies/create/" component={CreateAcademy} />
                  <Route path="/academies/edit/:id/" component={EditAcademy} /> */}
                  <Route path="/thankyou/" component={GreetingsPage} />
                </Switch>
              </div>
              <div className='container-fluid'>
                <Switch>
                  {/* <Route exact path="/academies/" component={AcademyList} /> */}
                  <Route exact path="/listofplayers000/" component={PlayerList} />
                </Switch>
              </div>

            </div>
          </Router>
        </div>\
        </Router>
    );
  }
}

export default App;
