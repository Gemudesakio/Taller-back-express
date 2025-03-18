import { response } from 'express'
import Producto from '../../models/Producto.js'

//agregar un solo objeto
let createOne = async (req,res,next)=>{
    try {
        let dataProducto = {
            nombre: "mancuerna rusa",
            marca: "GymPro", tipo: "Deportes", 
            precio: 2560
        }
        let newProducto = await Producto.create(dataProducto)
        return res.status(201).json({
            success:true,
            response: newProducto
        })

    } catch (error) {
        next(error)           
    }
}

//agregar varios objetos 

let createAny = async (req,res,next)=>{
    try {
        let dataProducto = req.body
        let newProducto = await Producto.insertMany(dataProducto)
        return res.status(201).json({
            success:true,
            response: newProducto
        })

    } catch (error) {
        next(error)           
    }
}
export {createOne, createAny}