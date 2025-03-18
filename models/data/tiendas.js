import 'dotenv/config.js'
import '../../config/database.js'
import Tienda from '../Tienda.js'

// Creamos un vector con 5 tiendas
let tiendas = [
    {
        nombre: 'Tienda Central',
        direccion: 'Calle 123 #45-67, Bogotá',
        telefono: 3111234567
    },
    {
        nombre: 'Supermercado La 14',
        direccion: 'Carrera 50 #10-20, Cali',
        telefono: 3129876543
    },
    {
        nombre: 'Minimarket El Progreso',
        direccion: 'Avenida Siempre Viva 742, Medellín',
        telefono: 3134567890
    },
    {
        nombre: 'Tienda Express',
        direccion: 'Calle 8 #22-55, Cartagena',
        telefono: 3146543210
    },
    {
        nombre: 'Almacén La Economía',
        direccion: 'Carrera 30 #50-60, Bucaramanga',
        telefono: 3157890123
    }
];

//insertamos las intendas a la bd
Tienda.insertMany(tiendas)
.then((docs)=>{
   console.log(`${docs.length} tiendas insertadas a la base de datos`);
   process.exit()

})
.catch((err)=>{
  console.log("error al insertar las tiendas", err);
  process.exit(1)
  
})