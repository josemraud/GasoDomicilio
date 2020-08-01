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
        isLoaded: false, 
        
      }
    }

    async componentDidMount(){
      try {
        let datosPerfil = await obtenerPerfil();
        this.setState({datosPerfil: datosPerfil});
        console.log(this.state.datosPerfil);
        //console.log(datosPerfil);
      }catch(e){
        console.log(e);
      }
    }

    render(){
      var {datosPerfil, isLoaded} = this.state
      var usuario = datosPerfil.map(item => {
        return (
          <div key={item._id} className="datosUsuario">
            <label>Nombre: {item.nombre} </label>
            <br/>
            <label>Apellido: {item.apellido} </label>
            <br/>
            <label>Correo: {item.email} </label>
            <br/>
            <label>Telefono: {item.telefono} </label>
            <br/>
          </div>
        )
      })
     
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
                    <section>
                      {usuario}
                    </section>

                    <hr></hr>
                    <h4>Cambiar contrasena</h4>
                    
                    <label>Contrasena actual:</label>
                    <input type="password"></input>
                    <br/>
                    <label>Contrasena nueva:</label>
                    <input type="password"></input>
                    <button className="btn">Cambiar</button>
                  </fieldset>
                </section>
          </div>
          
        
      
         
        </Page>
      );
    }
  }