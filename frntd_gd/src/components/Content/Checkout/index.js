import React,{Component} from 'react';
import Page from '../../Page';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



export default class extends Component {
  
  
     constructor(){
        super();
     }

  estilosTextfield()
  {
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '20ch',
        },
      },
    }));
  }

       render()
       {

        return(


          <Page
          title={"Logo"}
          showHeader={true}
          showFooter={true}
  
         >
         <h2>Orden</h2>
         <div className="classRadio">
  
         
          <br/>
          <br/>
          <h3>Seleccione un metodo de pago</h3>
          <label>Tarjeta</label>
          <input type="radio" id="Tarjeta" name="TipoPago" value="Tarjeta"></input>
           
        <br/>
        <br/>
        <label>Visa</label>
          <input type="radio" id="Visa" name="Tarjetas" value="Visa"></input>
          <label>Mastercard</label>
          <input type="radio" id="Mastercard" name="Tarjetas" value="Mastercard"></input>
          <label>American Express</label>
          <input type="radio" id="American Express" name="Tarjetas" value="Mastercard"></input>
          <br/>
          <br/>
        <TextField id="standard-basic" label="Numero Tarjeta" />
  
       
      
          <br/>
          <br/>
          <TextField id="standard-basic" label="Codigo Seguridad" />
  
          <br/>
  
          <br/>
         <TextField id="standard-basic" label="Fech Exp" />
          <br/>
          <br/>
          <label>Efectivo</label>
          <input type="radio" id="Efectivo" name="TipoPago" value="Efectivo"></input>
          <br/>
          <br/>
        <TextField id="standard-basic" label="Ingrese monto a pagar" />
          <br/>
          <br/>
     
          <br/>
          <br/>
          </div> 
          <br/>
          <Button
          fullWidth
          variant="contained"
          color="secondary"
          >
          Confirmar Pedido
         </Button>
              
        </Page>


        );


  } 
   
}