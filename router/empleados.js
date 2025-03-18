import { Router } from "express";
import {todos, cargo, nombre} from '../controllers/empleados/read.js'
import {createOne, createAny} from '../controllers/empleados/create.js'

const routerEmpleado = Router()

//rutas read
routerEmpleado.get('/todos',todos)
routerEmpleado.get('/cargo/:cargoParams',cargo)
routerEmpleado.get('/nombre/:nombreParams',nombre)

//rutas create
routerEmpleado.post('/createOne',createOne)
routerEmpleado.post('/createAny',createAny)
export default routerEmpleado