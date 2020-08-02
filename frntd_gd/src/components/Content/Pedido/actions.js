import  { paxios } from '../../../utilities/axios';



export const pedido = async(gasolinera, fecha, tipocombustible, cantLitros,tipoPago)=>{
    try {
        const {data} = await paxios.post(
            "/api/pedido/addorden",
            {
              gasolinera : gasolinera,
              fecha : fecha,
              tipocombustible : tipocombustible,
              cantLitros : cantLitros,
              tipoPago : tipoPago
            }
        );
        return data;
    } catch (e) {
        throw(e)
    }
}

