import React,{Component} from 'react';
import Page from '../../Page';
import { Grid, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import {GrUserManager} from 'react-icons/gr'

//import './conductor.css'


export default class extends Component {
    
    constructor(){
      super();

    }
    render(){
      
      return (
        
        <Page
          title="Perfil"
          showHeader={true}
          showFooter={true}
        >
          <div>
                <div className="imagen">
                  <GrUserManager size="10em" />
                </div>
                <section>
                  <fieldset>
                    <h4>Datos de usuario</h4>
                    <label>Nombre:</label>
                    <br/>
                    <label>Apellido:</label>
                    <br/>
                    <label>Correo:</label>
                    <br/>
                    <label>Telefono:</label>
                    <br/>
                    <h4>Cambiar contrasena:</h4>
                    <label>Contrasena actual:</label>
                    <input type="password"></input>
                    <label>Contrasena nueva:</label>
                    <input type="password"></input>
                    <Button variant="contained" color="primary">
                      Cambiar
                    </Button>
                  </fieldset>
                </section>
          </div>
          
        
      
         
        </Page>
      );
    }
  }