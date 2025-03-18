const error_handler = (error,req,res,next)=>{
    console.log(JSON.stringify(error, null, 2));

    
    return res.status(500).json({
        success: false,
        message: `Error 500, algo no ha salido bien en tu  peticion ${req.method} con la direccion ${req.url}`,
        error: error.message             
    
       } )
}
export default error_handler