var express = require('express');
var router = express.Router();
const model = require('./pedidos.model')

const init = async () => {
    await model.initModel();
}
init();

router.post('/addorden',async(req,res)=>{
    try{
        let {nombre, telefono, direccion} = req.body;
        const resultado = await model.addOrden(nombre, telefono, direccion);
        res.status(200).json(resultado)
    } catch (error){
        console.log(error)
        res.status(500).json({"Error":"Algo salio mas al agregar su orden"})
    }
}); //Agregar una orden nueva

router.post('/confirmacion',async(req,res)=>{

});

router.delete('/cancelacion/:codpedido',async(req,res)=>{

});



module.exports = router;