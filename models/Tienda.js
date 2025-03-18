import { Schema, model } from "mongoose";
 const collection = 'tienda'
 let schema =Schema({
    nombre:{type:String,required:true},
    direccion:{type:String,required:true},
    telefono:{type:Number,required:true}
 },
{
    timestamps:true
}
)

let Tienda = model(collection,schema)
export default Tienda