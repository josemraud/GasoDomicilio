import {paxios} from '../../../utilities/axios';

export const obtenerPerfil = async()=>{
    try{
      let { data } = await paxios.get('/api/perfil/private');
      //console.log(data);
      return data;
    }catch(e){
      throw(e);
    }
  }