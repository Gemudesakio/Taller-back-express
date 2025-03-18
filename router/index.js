import {Router} from 'express'
import routerTiendas from './tiendas.js'
import routerEmpleado from './empleados.js'
import routerProducto from './productos.js'

let routerIndex = Router()
routerIndex.use('/tienda',routerTiendas)
routerIndex.use('/empleado',routerEmpleado)
routerIndex.use('/producto',routerProducto)



export default routerIndex