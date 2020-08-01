import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {login} from './actions'

import Page from '../../Page'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {FaRegUserCircle} from 'react-icons/fa';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './login.css'
  
  

  export default class extends Component {
    constructor(){
      super()
      this.state = {
        email:'',
        password:'',
        redirectTo: false
      }

      this.onClickButton = this.onClickButton.bind(this);
      this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(e){
      const {name, value} = e.target;
      this.setState({[name]:value});
    }

    async onClickButton(e) {
      try{
        let userData = await login(this.state.email, this.state.password);
        const {jwt} = userData;
        delete userData.jwt;
        this.setState({ "redirectTo": true }, () => { this.props.auth.login(userData, jwt);});
      }catch(e){
        alert("Error al iniciar sesión.");
      }
    }

    render(){
      if(this.state.redirectTo){
        const tourl = (this.props.location.state) ? this.props.location.state.from.pathname: '/';
        return(
          <Redirect to={tourl}/>
        )
      }
      
      return (
      
        <Page
          showHeader={true}
          showFooter={true}
          title={"Login"}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Avatar className="avatar">
                        <FaRegUserCircle />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                        <form className="form">
                        <fieldset>
                        <label>Correo Electrónico</label>
                        <input type="email" name="email" onChange={this.onTextChange} value={this.state.email} />
                        </fieldset>
                        <fieldset>
                          <label>Password</label>
                          <input type="password" name="password" onChange={this.onTextChange} value={this.state.password} />
                        </fieldset>
                        <button className="btn" onClick={this.onClickButton}>Iniciar Sesión</button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/recuperacion" variant="body2">
                                    ¿Olvidaste tu contrasena?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                    {"¿No tienes cuenta? Registrate!"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                </div>
              





                

            </Container>
      </Page>
    );
    }
    
  }
