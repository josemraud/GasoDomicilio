const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;

let pedidosColl;


module.exports = class {
    // initModel 
    static async initModel(){
      if(!pedidosColl) {
        let _db = await db.getDB();
        //console.log(_db);
        pedidosColl = await _db.collection('pedido');
        console.log("Coleccion de Pedido asignada");
        return;
      }else{
        return;
      }
    }



    static async addOrden (nombre, telefono, direccion){
        try{
            const orden = {nombre:nombre, telefono:telefono, direccion:direccion};
            const result = await pedidosColl.insetOne(orden);            

            return result            
        }catch (error){
            console.log(error)
            return error
        }
    }


}