import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReservas=new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioReservas.buscarReservas(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarReservaPorId(request,response){
        let id=request.params.idReserva //recibo id de la peticion
        let objetoServicioReservas=new ServicioReserva()
        try{

            response.status(200).json({
                "mensaje":"exito en la consulta "+id,
                "datos":await objetoServicioReservas.buscarReservaPorId(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarReserva(request,response){

        let datosReserva=request.body // OBTENGO DATOS DEL BODY
        let objetoServicioReservas = new ServicioReserva()
        try{
                await objetoServicioReservas.agregarReservaEnBD(datosReserva)

                    response.status(200).json({
                        "mensaje":"exito registrando reserva",
                        "datos":null
                    })
        }catch(error){
                response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
                 })

        }
    }

    async editarReserva(request,response){

        let id = request.params.idReserva
        let datosReserva = request.body

        let objetoServicioReservas=new ServicioReserva()
       

        try{

            await objetoServicioReservas.editarReserva(id,datosReserva)

            response.status(200).json({
                "mensaje":"exito editando"+id,
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


}