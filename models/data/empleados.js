import 'dotenv/config.js'
import '../../config/database.js'
import Empleado from '../Empleado.js'

let empleados = [
    { nombre: 'Juan Pérez', cargo: 'Gerente General', salario: 5000000 },
    { nombre: 'María Gómez', cargo: 'Jefe de Ventas', salario: 4000000 },
    { nombre: 'Carlos Rodríguez', cargo: 'Cajero', salario: 2000000 },
    { nombre: 'Laura Sánchez', cargo: 'Asistente Administrativo', salario: 2500000 },
    { nombre: 'Andrés Morales', cargo: 'Encargado de Inventario', salario: 3000000 },
    { nombre: 'Sofía Martínez', cargo: 'Supervisora de Caja', salario: 2800000 },
    { nombre: 'Luis Ramírez', cargo: 'Auxiliar de Bodega', salario: 2200000 },
    { nombre: 'Valentina Torres', cargo: 'Vendedora', salario: 2300000 },
    { nombre: 'Jorge Herrera', cargo: 'Repartidor', salario: 2100000 },
    { nombre: 'Natalia Castro', cargo: 'Recepcionista', salario: 2400000 },
    { nombre: 'Fernando Rojas', cargo: 'Contador', salario: 3500000 },
    { nombre: 'Camila Navarro', cargo: 'Marketing Digital', salario: 3200000 },
    { nombre: 'Ricardo Mendoza', cargo: 'RRHH', salario: 3300000 },
    { nombre: 'Daniela Rivera', cargo: 'Diseñadora Gráfica', salario: 3100000 },
    { nombre: 'Sebastián López', cargo: 'Ingeniero de Sistemas', salario: 4500000 },
];

Empleado.insertMany(empleados)
.then((docs)=>{
    console.log(`${docs.length} empleados agregados a la base de datos`);
    process.exit()
})
.catch((err)=>{
    console.log("error insertando los empleados "), err;
    process.exit(1)
    
})