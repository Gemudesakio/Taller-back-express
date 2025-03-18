import Empleado from '../../models/Empleado.js'

// Ver todos los empleados
let todos = async (req, res, next) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            success: true,
            empleados: all
        })
    } catch (error) {
        next(error)   
    }
}

// Ver empleados por cargo
let cargo = async (req, res, next) => {
    try {
        let cargoQuery = req.params.cargoParams
        let all = await Empleado.find({ cargo: cargoQuery })
        return res.status(200).json({
            success: true,
            empleados: all
        })
    } catch (error) {
        next(error)   
    }
}

// Ver empleados por nombre
let nombre = async (req, res, next) => {
    try {
        let nombreQuery = req.params.nombreParams
        let all = await Empleado.find({ nombre: nombreQuery })
        return res.status(200).json({
            success: true,
            empleados: all
        })
    } catch (error) {
        next(error)   
    }
}

export { todos, cargo, nombre }
