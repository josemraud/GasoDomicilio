import React , {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NRoute from './utilities/normalroutes';

import Home from './components/Content/Home'
import Perfil from './components/Content/Perfil'
import Login from './components/Content/Login'
import Registrarse from './components/Content/SignUp'
import Pedido from './components/Content/Pedido'
import Recuperacion from './components/Content/Recuperacion'

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
          <NRoute path="/login" component={Login} exact /*auth={auth}*/ />
          <NRoute path="/signup" component={Registrarse} exact /*auth={auth}*/ />
          <NRoute path="/recuperacion" component={Recuperacion} exact /*auth={auth}*/ />
          <NRoute path="/pedido" component={Pedido} exact /*auth={auth}*/ />
        </Switch>
      </Router>
    );
  }
}


