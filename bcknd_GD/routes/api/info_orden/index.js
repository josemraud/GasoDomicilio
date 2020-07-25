var express = require('express');
var router = express.Router();

router.get('/info/:codpedido',async(req,res)=>{
    try{
        let {codpedido} = req.params;
        let cuenta = await model.getOneOrden(codpedido);
        res.status(200).json(cuenta);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
});

module.exports = router;

