Pasos para montar un servidor, conectar a la base de datos y crear los primeros endpoints

1: npm init -y : inicializamos node para un nuevo proyecto
2: npm install express: instalamos express que hara la funcion de servidor
3: npm install dotenv: crear variables de entorno para poder iniciar el servidor
4: configurar el archivo package.json   "type": "module", "start": "node ./server.js": para las primera pruebas
5: npm install nodemon --save-dev: despues de instalar configuramos el script de dev ---->   "dev": "nodemon ./server.js"
6: npm install mongoose: libreria para conexion a bd, conseguimos el enlace a la bd y configuramos database.js
7: importamos la bd en el servidor y hacemos su configuracion basica
    7.1: habilitar peticiones complejas donde los url van a recibir parametros o querys --> server.use(express.urlencoded({extended:true})) 
    7.2: le decimos a express poder manejar el formato json para exportar, recibir, enviar, etc --> server.use(express.json())
    7.3: se instala e inicia cors para la seguriad de origenes cruzados--> server.use(cors())
    7.4: se usa morgan para dar seguimiento a las peticiones que le hacen anuestro servidor --> server.use(morgan('dev'));
8: agregamos el archivo .gitignore
9: creamos la carpeta models, creamos modelos 
10: creamos los scripts para agregar inforamcion segun los modelos a la base de datos   y los configuramos en el package.json
    "dbtienda": "node ./models/data/tiendas.js",
    "dbempleado": "node ./models/data/empleados.js",
    "dbproducto": "node ./models/data/productos.js"
11: creamos los controladores para cada uno de los modelos y definimos sus routers  
    11.1 creamos la carpeta router y creamos un index.js que sera el enrrutador central importamos el objeto router import {Router} from 'express' y lo exportamos
    11.2 importartamos el index.js de router en el servidor de express y le damos uso --> server.use('/api',routerIndex)
    
12 se crean los controladores para cada modelo
    12.1 se importa el modelo
    12.2 se crea la funcion que hara la consulta a la bd con gestion de errores 
13 se enrrutan los controladores en su archivo correspondiente en read
    13.1 perimero se importa el objeto Router
    13.2 se importan los distintos controladores
    13.3 dependiedo el url se enrruta a cada uno de ellos
  