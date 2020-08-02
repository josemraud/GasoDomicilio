import  { paxios } from '../../../utilities/axios';



export const pedido = async(gasolinera, tipocombustible, fecha , cantLitros,estado)=>{
    try {
        const {data} = await paxios.post(
            "/api/pedido/addorden",
            {
              gasolinera : gasolinera,
              tipocombustible : tipocombustible,
              fecha : fecha,
              cantLitros : cantLitros,
              estado : estado
            }
        );
        return data;
    } catch (e) {
        throw(e)
    }
}

