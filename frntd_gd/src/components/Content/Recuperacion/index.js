import React,{Component} from 'react';
import Page from '../../Page';
import Text from '../../Text';
import {Button} from '@material-ui/core'

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
                        <Text/>
                        <br/>
                        <label>Contraseña nueva:</label>
                        <Text/>
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
