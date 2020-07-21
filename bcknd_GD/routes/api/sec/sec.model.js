const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

let userColl

module.exports = class {
    static async initModel(){
      if (!userColl) {
        let _db = await db.getDB();
        //console.log(_db);
        userColl = await _db.collection('usuarios');
        if (process.env.ENSUREINDEX == "1"){
          console.log('Creando Indices de Usuarios');
          await userColl.createIndex({"email":1},{unique:true});
        }
        console.log("Coleccion de Usuario asignados");
        return;
      } else {
        return;
      }
    }


    static async crearCuenta(data){
        const {nombre, apellido, correo, telefono, password} = data;
        try {
            let newUser = {
                "nombre": nombre,
                "apellido": apellido,
                "email": correo,
                "telefono": telefono,
                "password" : bcrypt.hashSync(password, 10),
                "lastlogin" : null,
                "lastpasswordchanged" : null,
                "passwordexpires" : new Date().getTime() + (1000 * 60 * 60 * 24 * 90),
                "oldpasswords": [],
                "roles": [ "public" ]
            }
            let result = await userColl.insertOne(newUser);
            return result
        }catch(error){
            console.log(error)
            return error;
        }
    }// crear una nueva cuenta


    static async getByEmail(correo){
        try {
            let filter = {"email": correo};
            let user = await userColl.findOne(filter);
            return user;
        } catch (err) {
          console.log(err);
          return err;
        }
      }
    
      static async comparePassword( rawPassword, cryptedPassword) {
        try {
          return bcrypt.compareSync(rawPassword, cryptedPassword);
        }catch (err){
          return false;
        }
    }


}   
