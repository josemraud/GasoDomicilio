import React,{Component} from 'react';
import Page from '../../Page';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { pedido } from './actions';

export default class extends Component {
  
  
     constructor(){
        super();
        this.state= {
          tipopago: '',
          open: false
        }
        this.onClickButton = this.onClickButton.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
     }

     async onClickButton(e) {
      try {
        let pedidoData = await pedido();
        alert("pedido ingresado")
      } catch (error) {
        alert("error al ingresar el pedido")
         throw(error)
      }
  }

     clickYes=()=>{
      this.props.clickYes()
      this.setState({
          open: !this.state.open

      })
  }

  onTextChange(e){
    const {name, value} = e.target;
    this.setState({[name]:value});
  }

  handleToggle = () => {
      this.setState({
          open: !this.state.open
      })
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
        const { open } = this.state
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
          <input type="radio" id="Tarjeta" name="TipoPago" value="Tarjeta" /*checked = {this.state.tipopago === "Tarjeta"} onChange = {this.onTextChange} */></input>
           
        <br/>
        <br/>
        <label>Visa</label>
          <input type="radio" id="Visa" name="Tarjetas" value="Visa"></input>
          <label>Mastercard</label>
          <input type="radio" id="Mastercard" name="Tarjetas" value="Mastercard"></input>
          <label>American Express</label>
          <input type="radio" id="American Express" name="Tarjetas" value="American Express"></input>
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
          <input type="radio" id="Efectivo" name= "TipoPago" value="Efectivo" /*checked = {this.state.tipopago === "Efectivo"} onChange = {this.onTextChange}*/></input>
          <br/>
          <br/>
        <TextField id="standard-basic" label="Ingrese monto a pagar" />
          <br/>
          <br/>
          <Button variant="contained" color="primary" onClick={this.handleToggle}>
                Confirmar Pago
              </Button>
              <Dialog
                open={open}
                onClose={this.handleToggle}
              >
                <DialogContent>
                  <DialogContentText>
                    ¿Esta seguro en procesar el pedido?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.clickYes} color="primary">
                    Si
                  </Button>
                  <Button onClick={this.handleToggle} color="primary" autoFocus>
                    No
                  </Button>
                </DialogActions>
              </Dialog>
          <br/>
          <br/>
          </div> 
          <br/>
    
     
        </Page>


        );


  } 
   
}