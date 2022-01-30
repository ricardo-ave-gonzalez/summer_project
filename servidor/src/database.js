import mysql from 'mysql';
import database from './config.js';

let connect = mysql.createPool(database);

connect.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Se cerró la conexión a la base de datos.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Se rechazó la conexión a la base de datos');
        }
        return;
    }
    if (connection) {
        console.log('La base de datos se encuentra conectada');
    }
    return;
})

export default connect;