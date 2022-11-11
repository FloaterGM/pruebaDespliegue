import {modeloReserva} from '../Models/Modeloreserva.js'

export class ServicioReserva{

    //aqui programo metodos para cada una de las
    //consultas que quiero hacer en bd

    async buscarReservas(){
        let reservas=await modeloReserva.find()
        return reservas
    }

    async buscarReservaPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async agregarReservaEnBD(datos){
        let datosValidados=new modeloReserva(datos)
        return await datosValidados.save()
    }

    async editarReserva(id,datos){

        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

}