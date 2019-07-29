// Dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
 
const app = express();

// Configuración
app.set('puerto',process.env.PORT || 3000);

// Middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

// Rutas
app.use('/app/usuarios',require('./enrutador/enrutador'));

// Crear Servidor
app.listen(app.get('puerto'),()=>{
    console.log(`Servidor creado en el puerto ${app.get('puerto')}`);
});