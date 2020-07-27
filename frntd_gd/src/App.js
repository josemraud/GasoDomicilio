import React , {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NRoute from './utilities/normalroutes';

import Home from './components/Content/Home'
import Conductor from './components/Content/Conductor'

export default class extends Component{
  render() {
    /*const auth = {
      /*isLogged : this.state.isLogged,
      login: this.setLogginData,
      logout: this.setLoggoutData,
    }
    */
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <NRoute path="/conductor" component={Conductor} exact /*auth={auth}*/ />
        </Switch>
      </Router>
    );
  }
}


