import * as dotenv from 'dotenv' 
dotenv.config()
import Cors from 'cors'

app.use(Cors)

import {ServidorAPI} from './API/ServidorAPI.js'
import { application } from 'express'

let servidorHoteles=new ServidorAPI() //Intancia de una clase (OBJETO)
servidorHoteles.despertarServidor()







