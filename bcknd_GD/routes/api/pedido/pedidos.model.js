const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

let pedidosColl;


module.exports = class {
    // initModel 
    static async initModel(){
      if(!pedidosColl) {
        let _db = await db.getDB();
        //console.log(_db);
        pedidosColl = await _db.collection('pedido');
        console.log("Coleccion de Pedido asignada");
        if (process.env.ENSUREINDEX == "1") {
          console.log("Creando Indice para ubicacion con GEO capabilities");
          await pedidosColl.createIndex( {"ubicacion": "2dsphere" }, {"unique": true});
        }
        return;
      }else{
        return;
      }
    }

    static async getAllOrdenes(){
      try{
        if(pedidosColl){
          let registro = await pedidosColl.find();
          return registro.toArray();
        }
        return [];
      } catch(err){
        console.log(err);
        return err;
      }
    }//Get todas sus ordenes

    static async getOneOrden(id) {
      try {
        let filter = { "_id": new ObjectId(id)};
        const result = await pedidosColl.findOne(filter);
        return result;
      } catch (error) {
        console.log(error);
        return err;
      }
    }//Buscar orden


    static async addOrden (gasolinera, fecha, tipocombustible, cantLitros, latitud, longitud, radioKM, tipoPago, estado){
        try{
            let orden = {
              gasolinera, 
              fecha, 
              tipocombustible, 
              cantLitros, 
              ubicacion: {
                type:"Point",
                coordinates: [longitud, latitud ]
              },
              radioKM, 
              tipoPago,
              estado: estado
            };
            let result = await pedidosColl.insertOne(orden);            
            return result            
        }catch (error){
            console.log(error)
            return error
        }
    }//Agregar una orden


    static async deleteOrden(id){
      try{
        let filter = {"_id": new ObjectId(id)};
        const result = await pedidosColl.deleteOne(filter);
        return result;
      }catch(error){
        console.log(error);
        return error;
      }
    }// Cancelar una orden
  


}