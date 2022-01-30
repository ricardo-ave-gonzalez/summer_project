import express from 'express';
import database from './src/database.js'
import cors from 'cors';
import { router } from './src/router/usuariosRouter.js';

const app = express();

//app.set('port', process.env.PORT || 4000);
const port = process.env.PORT || 4000;
//middlewares
app.use(express.json());
//rutas
app.use("/", router);
app.get('/bienvenido', (req, res) => {
    res.send('Bienvenido a nuestra app 2022');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
})