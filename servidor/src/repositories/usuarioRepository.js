import connect from './../database';
import fs from 'fs';
import _, { reject } from 'underscore';
import { resolve } from 'path';

let usuarios = {}

usuarios.obtenerTodos = (err) => {
    return new Promise((resolve, reject) => {
        if (err) throw err;
        let query = 'SELECTO * FROM usuarios';
        connect.query(query, (err, result) => {
            if(err){
                let describirError = `se produjo un error ${err}`;
                reject(describirError);
                return;
            }
            console.log(result);
            resolve(result);
        })
    })
}

usuarios.obtenerPorId = (id, err) => {
    return new Promise((resolve, reject) => {
        if(err) throw err;
        let query = 'SELECT * FROM usuarios WHERE id = ?';
        connect.query(query, [id], (err, result, field) => {
            if(err){
                let describirError = `se produjo un error ${err}`;
                reject(describirError);
                return;
            } else {
                console.log(`Se seleccionó correctamente el usuario con el id ${id}`);
                resolve(result);
            }
        })
    })
}

module.exports = usuarios;