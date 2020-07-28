import React , {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NRoute from './utilities/normalroutes';

import Home from './components/Content/Home'
import Perfil from './components/Content/Perfil'
import Pedido from './components/Content/Pedido'

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
          <NRoute path="/perfil" component={Perfil} exact /*auth={auth}*/ />
          <NRoute path="/pedido" component={Pedido} exact/>
        </Switch>
      </Router>
    );
  }
}


