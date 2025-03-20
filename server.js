import express from "express";
import 'dotenv/config.js'
import './config/database.js'
import cors from "cors";
import morgan from 'morgan'
import routerIndex from "./router/index.js";
import not_fount_handler from "./middlewares/not_fount_handler.js";
import error_handler from "./middlewares/error_handler.js";
import error_400 from "./middlewares/error_400.js";
import limiter from "./middlewares/rateLimit.js";
import contador from "./middlewares/contador.js";



const server = express()
const port = process.env.PORT || 8080
const ready = ()=> console.log("server is ready in port: "+port)


// configuraciones bsicas para cualquier servidor
//middleword

server.use(express.urlencoded({extended:true}))

//habilitar formato json en el servidor
server.use(express.json())

//se habilita la seguyridad de origenes cruzados 
server.use(cors())

//se habilita morgan para ver las peticiones que le hacen a nuestro servidor 
server.use(morgan('dev'))

server.use(limiter)
server.use(contador)

//se usa el enrrutador 
server.use('/api', routerIndex)
server.use(not_fount_handler)
server.use(error_400)
server.use(error_handler)

//finalemnte despues de la configuracion basica escuchamos en el servidor 
server.listen(port,ready)
