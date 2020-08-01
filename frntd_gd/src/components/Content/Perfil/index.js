import React,{Component} from 'react';
import Page from '../../Page';
import { Button } from '@material-ui/core';
import {GrUserManager} from 'react-icons/gr'

import {obtenerPerfil} from './actions';

//import './conductor.css'


export default class extends Component {
    
    constructor(){
      super();
      this.state = {
        datosPerfil: [],
        nombre:'',
        apellido:'',
        correo:'',
        telefono:'',
      }
    }

    async componentDidMount(){
      try {
        let datosPerfil = await obtenerPerfil();
        this.setState({...this.state, datosPerfil: datosPerfil});
        //console.log(this.state.datosPerfil);
        //console.log(datosPerfil);
      }catch(e){
        console.log(e);
      }
    }

    render(){
      
      return (
        
        <Page
          title="Perfil"
          showHeader={true}
          showFooter={true}
        >
          <div className="contenedor">
                <div className="imagen">
                  <GrUserManager size="10em" />
                </div>
                <section>
                  <fieldset>
                    <h4>Datos de usuario</h4>
                    <label>Nombre: {this.state.nombre} </label>
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