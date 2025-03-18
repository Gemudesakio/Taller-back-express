import { response } from 'express'
import Empleado from '../../models/Empleado.js'

//agregar un solo objeto
let createOne = async (req,res,next)=>{
    try {
        let dataEmpleado = {
            nombre: 'Luis Rivera', 
            cargo: 'Ingeniero de Electronico', 
            salario: 7500000 
        }
        let newEmpleado = await Empleado.create(dataEmpleado)
        return res.status(201).json({
            success:true,
            response: newEmpleado
        })

    } catch (error) {
       next(error)
        
    }
}

//agregar varios objetos 

let createAny = async (req,res,next)=>{
    try {
        let dataEmpleado = req.body
        let newEmpleado = await Empleado.insertMany(dataEmpleado)
        return res.status(201).json({
            success:true,
            response: newEmpleado
        })

    } catch (error) {
        next(error)
        
    }
}
export {createOne, createAny}