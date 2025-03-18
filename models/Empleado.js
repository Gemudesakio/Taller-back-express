import { Schema,model } from "mongoose";

const collection = 'empleado'
let schema = Schema({
    nombre:{type:String,required:true},
    cargo:{type:String,required:true},
    salario:{type:Number,required:true}
},
{
    timestamps:true
})

let Empleado = model(collection,schema)
export default Empleado