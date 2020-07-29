import React,{Component} from 'react';
import Page from '../../Page';
//import Radio from '../../Radio';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '160px',
      height: '15px'
    },
  },
}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function Checkout(){
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


       return(
      
           <Page
             title="Logo"
             showHeader={true}
             showFooter={true}
           >
               <h2>Seleccione un tipo de pago</h2>
           <div className="classRadio">
         
          
           <label>Tarjeta</label>
      <GreenRadio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
       <br/>
       <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Numero de Tarjeta" variant="outlined"   disabled = {true} />
      <br/>
      <TextField id="outlined-basic" label="Pin" variant="outlined"   disabled = {true} />
      <br/>
      <TextField id="outlined-basic" label="Fecha Exp" variant="outlined"   disabled = {true} />
      
      <br/>
      <br/>
      </form>
      <br/>
      <label>Efectivo</label>
<GreenRadio

     
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
    
          
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