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
import { useParams } from 'react-router-dom';
export default class extends Component {
  
     constructor(){
        super();
        this.state= {
          tipopago: '',
          open: false
        };
        this.onClickButton = this.onClickButton.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
     
     }



    /*clickYes=()=>{
      this.props.clickYes()
      this.setState({
          open: !this.state.open
         
      })
  }*/

  onRadioChange(e)
  {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  handleToggle = () => {
      this.setState({
          open: !this.state.open
      })
  }

 
   
  componentDidMount(){
    if("geolocation" in navigator){
      console.log("Availabe");
    } else {
      console.log("Not avaialbe");
    }
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



  async onClickButton(e) {

    try {
      let pedidoData = await pedido(this.props.match.params.gasolinera,this.props.match.params.tipocombustible,this.props.match.params.fecha, this.props.match.params.cantLitros ,this.state.tipopago)
      alert("pedido ingresado")
      window.location.reload()
    } catch (error) {
      alert("error al ingresar el pedido")
        window.location.reload()
       throw(error)
    }
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
          <input type="radio" id="Tarjeta" name="tipopago" value="Tarjeta" checked={this.state.tipopago==="Tarjeta"}  onChange={this.onRadioChange} ></input>
           
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
          <TextField  id="standard-basic" label="Codigo Seguridad" />
  
          <br/>
  
          <br/>
         <TextField id="standard-basic" label="Fech Exp" />
          <br/>
          <br/>
          <label>Efectivo</label>
          <input type="radio" id="Efectivo" name="tipopago" value="Efectivo"  checked={this.state.tipopago==="Efectivo"} onChange={this.onRadioChange}></input>
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
                  <Button onClick={this.onClickButton} color="primary">
                    Si
                  </Button>
                  <Button onClick = {this.handleToggle}   color="primary"  autoFocus >
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