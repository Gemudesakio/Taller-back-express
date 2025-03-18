const error_400 = (error,req,res,next)=>{
  if (error.name === 'ValidationError') {
     const errores = Object.keys(error.errors).map(field =>(
      {
        campo: error.errors[field].path,
        mensaje: error.errors[field].message,
        tipo: error.errors[field].kind
      }
     ))
    return res.status(400).json({
        success: false,
        message: `Error 400, algo no esta bien estructurado en tu  peticion ${req.method} con la direccion ${req.url}`,
        errores: errores            
    
       } )
  } else {
    next(error)
  }

   
}
export default error_400