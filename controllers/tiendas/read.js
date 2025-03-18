import Tienda from '../../models/Tienda.js'
//ver todas las tiendas
let todas = async (req,res,next)=>{
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            success:true,
            tiendas: all
        })
    } catch (error) {
      next(error)        
    }
}

//ver una tienda segun su direccion
let direccion = async (req,res,next)=>{
    try {
        let direccionQuery = req.params.direccionParams
        let all = await Tienda.find({
            direccion: { $regex: direccionQuery, $options: 'i' }  // insensible a mayúsculas
        });
        
        return res.status(200).json({
            success:true,
            tiendas: all
        })
    } catch (error) {
        next(error)           
    }
}

//ver una tienda segun su nombre

let nombre = async (req,res,next)=>{
    try {
        let nombreQuery = req.params.nombreParams
        let all = await Tienda.find({nombre: nombreQuery})
        return res.status(200).json({
            success:true,
            tiendas: all
        })
    } catch (error) {
        next(error)           
    }
}

export {todas, direccion, nombre}