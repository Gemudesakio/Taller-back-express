import Producto from '../../models/Producto.js'

// Ver todos los productos
let todos = async (req, res, next) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            success: true,
            productos: all
        })
    } catch (error) {
        next(error)   
    }
}

// Ver productos por tipo
let tipo = async (req, res, next) => {
    try {
        let tipoQuery = req.params.tipoParams
        let all = await Producto.find({ tipo: tipoQuery })
        return res.status(200).json({
            success: true,
            productos: all
        })
    } catch (error) {
        next(error)   
    }
}

// Ver productos por nombre
let nombre = async (req, res, next) => {
    try {
        let nombreQuery = req.params.nombreParams
        let all = await Producto.find({ nombre: nombreQuery })
        return res.status(200).json({
            success: true,
            productos: all
        })
    } catch (error) {
        next(error)   
    }
}

export { todos, tipo, nombre }
