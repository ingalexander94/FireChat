const mysql = require('mysql');
const {promisify} =  require('util');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'firechat'
});

conexion.connect(err=>{
    if (err) {
        console.log(err);
    }else{
        console.log('Base de Datos conectada');
    }
})

conexion.query = promisify(conexion.query);

module.exports = conexion; 