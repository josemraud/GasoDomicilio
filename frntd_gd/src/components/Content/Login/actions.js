import {paxios} from '../../../utilities/axios';

export const login = async (email, password)=>{
  try
  {
    const {data} = await paxios.post(
      "/api/sec/ingresar",
      {
        correo: email,
        password: password
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}