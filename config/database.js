import mongoose from "mongoose";
let url = process.env.URI_MONGO

//hacemos un conexion sincrona
async function connectBD(){
    try {
        await mongoose.connect(url)
        console.log("database is connected");
        
    } catch (error) {
        console.log("database is not connected:"+error);
        
    }
}
connectBD()