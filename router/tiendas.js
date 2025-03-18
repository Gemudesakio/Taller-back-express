import { Router } from "express"
import { todas, direccion, nombre } from "../controllers/tiendas/read.js"
import {createOne, createAny} from '../controllers/tiendas/create.js'

const routerTiendas = Router()

//rutas read
routerTiendas.get('/todas',todas)
routerTiendas.get('/direccion/:direccionParams',direccion)
routerTiendas.get('/nombre/:nombreParams',nombre)

//rutas create
routerTiendas.post('/createOne',createOne)
routerTiendas.post('/createAny',createAny)
export default routerTiendas