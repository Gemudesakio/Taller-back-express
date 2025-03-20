const error_400 = (error, req, res, next) => {

  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({
      success: false,
      message: 'JSON mal formado en el cuerpo de la solicitud.'
    });
  }

  if (error.name === 'ValidationError') {
    const errores = Object.keys(error.errors).map(field => ({
      campo: error.errors[field].path,
      mensaje: error.errors[field].message,
      tipo: error.errors[field].kind
    }));

    return res.status(400).json({
      success: false,
      message: `Error 400, algo no está bien estructurado en tu petición ${req.method} con la dirección ${req.url}`,
      errores: errores
    });
  }

  next(error);
};

export default error_400
