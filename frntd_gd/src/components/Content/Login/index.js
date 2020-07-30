import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
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
    }

    render(){
      
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
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contaseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className="submit"
                            >
                            Iniciar Sesion
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
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
