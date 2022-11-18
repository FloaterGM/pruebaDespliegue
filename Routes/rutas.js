//ESTE ARCHIVO ESTABLECE LAS RUTAS O ENDPOINTS DE CADA SERVICIO OFRECIDO POR MI API
import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva = new ControladorReserva()
let controladorHabitacion=new ControladorHabitacion() //usando el controlador


export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelescris/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelescris/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelescris/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelescris/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)
rutasPersonalizadas.get('/hotelescris/reservas', controladorReserva.buscarReservas)
rutasPersonalizadas.get('/hotelescris/reserva/:idReserva',controladorReserva.buscarReservaPorId)
rutasPersonalizadas.post('/hotelescris/reserva',controladorReserva.registrarReserva)
rutasPersonalizadas.put('/hotelescris/reserva/:idReserva',controladorReserva.editarReserva)


