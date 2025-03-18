import { response } from 'express'
import Tienda from '../../models/Tienda.js'

//agregar un solo objeto
let createOne = async (req,res,next)=>{
    try {
        let dataTienda = {
            nombre: 'plaza cesamo',
            direccion: 'Carrera 8a #16-65, Pasto',
            telefono: 3135718358
        }
        let newTienda = await Tienda.create(dataTienda)
        return res.status(201).json({
            success:true,
            response: newTienda
        })

    } catch (error) {
        next(error)           
    }
}

//agregar varios objetos 

let createAny = async (req,res,next)=>{
    try {
        let dataTienda = req.body
        let newTienda = await Tienda.insertMany(dataTienda)
        return res.status(201).json({
            success:true,
            response: newTienda
        })

    } catch (error) {
        next(error)           
    }
}
export {createOne, createAny}