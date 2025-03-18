let get = 0;
let post = 0;

const contador = (req, res, next) => {
    switch (req.method) {
        case 'GET':
            get++;
            break;
        case 'POST':
            post++;
            break;
        default:
            break;
    }

    console.log(`Se han realizado ${get} peticiones tipo GET`);
    console.log(`Se han realizado ${post} peticiones tipo POST`);
    console.log("total de peticiones es: " , get+post);
    

    next(); // Muy importante para que continúe el flujo de la request
};

export default contador;
