import {paxios} from '../../../utilities/axios';

export const login = async (email, password)=>{
  try
  {
    const {data} = await paxios.post(
      "/api/sec/ingresar",
      {
        email: email,
        pswd: password
      }
    );
    return data;
  }catch (e){
    throw(e);
  }
}