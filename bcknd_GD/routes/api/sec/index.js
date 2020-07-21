var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

let secModel = require('./sec.model');

let  init = async ()=>{
    await secModel.initModel();
  }
init();

router.post('/ingresar',async(req,res)=>{
    try {
        var { email, pswd } = req.body;
        
        var user = await secModel.getByEmail(email);
        if (await secModel.comparePassword(pswd, user.password)) {
           const { email, roles, _id } = user;
           const jUser = { email, roles, _id };
           console.log(jUser);
           let token = jwt.sign(jUser, process.env.JWT_SECRET, {expiresIn: '120m'});
           res.status(200).json(
             {
               ...jUser, jwt: token
             }
           );
        } else {
          res.status(401).json({"Error":"Credenciales Incorrectas"});
        }
      } catch (err) {
        res.status(500).json({ "Error": "Algo Sucendió mal!!" });
    }
});

router.post('/crearcuenta',async(req,res)=>{
    try {
        var rslt = await secModel.crearCuenta(req.body);
        console.log(rslt);
        res.status(200).json({ "Mensaje": "Usuario Creado" });
    } catch (err) {
        res.status(500).json({ "Error": "Algo Sucendió mal!!" });
    }
});

router.put('/recuperacion/:idusuario',async(req,res)=>{

});


module.exports = router;