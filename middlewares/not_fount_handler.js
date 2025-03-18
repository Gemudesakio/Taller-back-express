const not_fount_handler  = (req,res,next)=>{
    return res.status(404).json({ 
        success: false,
        message:`la peticion ${req.method} con la url ${req.url} no fue encontrada `
    }) 

}
export default not_fount_handler