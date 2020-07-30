import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
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

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
     <label>Tarjeta</label>
      <GreenRadio
        
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
       <br/>
      
      <br/>
      <label>Efectivo</label>
<GreenRadio
      disabled = {true}
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
    
    
     
    </div>
  );
}


/*import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Seleccione un metodo de pago</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Tarjeta" />
        <FormControlLabel value="male" control={<Radio />} label="Efectivo" />
      </RadioGroup>
    </FormControl>
  );
}

*/