import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:String
    },
    fechaSalida:{
        required:true,
        type:String
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNiños:{
        required:true,
        type:Number
    },
    precioReserva:{
        required:false,
        type:Number
    }
})

export const modeloReserva = mongoose.model('reservas', EsquemaReserva)