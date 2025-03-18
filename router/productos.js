import { Router } from "express";
import {todos, tipo, nombre } from '../controllers/prodcutos/read.js'
import {createOne, createAny} from '../controllers/prodcutos/create.js'

const routerProducto = Router()

//rutas read
routerProducto.get('/todos',todos)
routerProducto.get('/tipo/:tipoParams',tipo)
routerProducto.get('/nombre/:nombreParams',nombre)

//rutas create
routerProducto.post('/createOne',createOne)
routerProducto.post('/createAny', createAny)
export default routerProducto
