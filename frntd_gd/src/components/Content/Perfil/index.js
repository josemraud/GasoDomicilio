import React,{Component} from 'react';
import Page from '../../Page';
import CreateDialog from '../../Dialog/CambiarPass'
import {GrUserManager} from 'react-icons/gr'

import {obtenerPerfil, cambiarPassword} from './actions';

//import './conductor.css'


export default class extends Component {
    
    constructor(){
      super();
      this.state = {
        datosPerfil: [],
        isLoaded: false, 
        oldPassword:'',
        newPassword:'',
        idusuario:''

        
      }
      this.onTextChange = this.onTextChange.bind(this)
      this.onclickConfirm = this.onclickConfirm.bind(this)
    }


    onTextChange(e){
      const {name, value} = e.target;
      this.setState({[name]:value});
      
    }

    async onclickConfirm(){
      try{
        let response = await cambiarPassword(this.state.idusuario, this.state.oldPassword, this.state.newPassword);
        console.log(response);
        alert("Cambio de password Exitoso")
        window.location.reload()
      }catch(e){
        alert("Error al cambiar password.");
        window.location.reload()
      }
    }

    async componentDidMount(){
      try {
        let datosPerfil = await obtenerPerfil();
        this.setState({isLoaded: true,datosPerfil: datosPerfil, idusuario: datosPerfil[0]._id});
      }catch(e){
        console.log(e);
      }
    }

    render(){
      var {datosPerfil} = this.state
      
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
                    <input type="text" name="oldPassword" onChange={this.onTextChange} value={this.state.oldPassword}/>
                    <br/>
                    <label>Contrasena nueva:</label>
                    <input type="password" name="newPassword" onChange={this.onTextChange} value={this.state.newPassword}/>
                    
                    <CreateDialog clickYes={this.onclickConfirm}/>
                  </fieldset>
                </section>
          </div>  
        </Page>
      );
    }
  }