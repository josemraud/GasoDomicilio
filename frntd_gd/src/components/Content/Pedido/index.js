import React , {Component} from 'react';
import Picker from '../../DPicker';
import Text from '../../Text';
import Page from '../../Page';
import {NavLinkBtn} from '../../Button';

import './pedido.css'

export default class extends Component{

 constructor(){
     super();
 }

  render()
  {
    return(
         
        <Page
          title="Logo"
          showHeader={true}
          showFooter={true}
        >
          <div className="classPedido">
             <h2>Elija su Pedido</h2>
             <label>Gasolineras Disponibles: </label>
             <select>
               <option>Seleccione una opcion</option>
               <option>Pumas Las Torres</option>
               <option>Uno Aeropuerto Toncontin</option>
             </select>
             <br/>
             <br/>
             <label>Tipo Gasolina: </label>
             <select>
               <option>Seleccione una opcion</option>
               <option>Regular</option>
               <option>Super</option>
               <option>Diesel</option>
               <option>Gas Vehicular</option>
             </select>
             <br/>
             <br/>
             <label>Puede elegir su horario y fecha de entrega</label>
             <br/>
             <br/>
             <Picker/>
             <br/>
             <br/>
             <label>Ingrese la cantidad de Litros: </label>
             <Text/>
             <br/>
             <NavLinkBtn toLink="/" className="btnBack">Siguiente</NavLinkBtn>
          </div>
        </Page>
        )
  }
 

}