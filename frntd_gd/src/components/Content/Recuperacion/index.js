import React,{Component} from 'react';
import Page from '../../Page';
import {Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
export default class extends Component {
    constructor(){
        super();
  
    }


    render(){
        return (
            <Page
            title="Recuperar Contraseña"
            showHeader={true}
            showFooter={true}
            >

                <div className="contenedor">
                    <div>
                        <h2>¿Has olvidado tu Contraseña?</h2>
                    </div>
                    <section>
                        <h5>Escriba su correo para ingresar contraseña nueva...</h5>
                        <br/>
                        <label>Correo:</label>
                       
                        <br/>
                        <label>Contraseña nueva:</label>
                     
                        <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        >
                            Cambiar
                        </Button>
                    </section>
                </div>


            </Page>
        )
    }
}
