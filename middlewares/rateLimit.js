import rateLimit from "express-rate-limit";
const limiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 5,
    message: {
      success: false,
      message: 'Has excedido el número de peticiones permitidas, inténtalo más tarde'
    }
  });
export default limiter  