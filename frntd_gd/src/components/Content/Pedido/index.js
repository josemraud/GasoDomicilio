import React , {Component} from 'react';
import Text from '../../Text';
import Page from '../../Page';
import {NavLinkBtn} from '../../Button';
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import { pedido } from './actions';




//import './pedido.css'

export default class extends Component{

 constructor(){
   
     super();
     
     this.state = {
       gasolinera: '',
       fecha : '',
       tipocombustible: '',
       cantLitros : '',
       tipoPago : '', 
       loading: true
     }
     this.onClickButton = this.onClickButton.bind(this);
     this.onTextChange = this.onTextChange.bind(this);
 }

 estilos(){
      const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

 }
 
 onTextChange(e){
   
  const {name, value} = e.target;
  this.setState({[name]:value});
}


async onClickButton(e) {
  try{
    let pedidoData = await pedido(this.state.gasolinera, this.state.fecha, this.setState.tipocombustible , this.setState.cantLitros , this.setState.tipoPago);
  }catch(e){
    alert("Hubo un problema al guardar su orden");
  }
}

  render()
  {
    return(
         
        <Page
          title="Logo"
          showHeader={true}
          showFooter={true}
          auth={this.props.auth}
        >
          <div className="classPedido">
            
             <h2>Realice su Pedido</h2>
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
             
             <TextField 
                     id="datetime-local"
                     type="datetime-local"
                     defaultValue="2020-07-28T10:30"
                     className={this.estilos}
                     InputLabelProps={{
                     shrink: true,
                     }}
                />
             <br/>
             <br/>
             <label>Ingrese la cantidad de Litros: </label>
             <Text/>
             <br/>
             <div>
             <NavLinkBtn  onClick={this.onClickButton}   toLink="/checkout" className="btnBack">
               <Button
                fullWidth
                variant="contained"
                color="secondary"
              >
                Siguiente
              </Button>
             </NavLinkBtn>
             </div>
             
          </div>
        </Page>
        )
  }
 

}