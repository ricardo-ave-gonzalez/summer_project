import { Router } from "express";
import mongoInterface from '../lib/MongoInterface.js'
import jwt from "jsonwebtoken";
import { ver } from '../lib/util.js'
import { jwtOptions } from './../auth/jwtAuth.js'

//const router = express.Router();
const router = Router();

//Pendiente encriptar password y manejar async
//agregar uuid 
router.post('/signup', (req, res) => {
    res.setHeader('Content-type', 'application/json');
    const user = req.body
    ver(JSON.stringify(user))

    mongoInterface.insert('summerproject', 'usuarios', user, (err, resultado) => {
        if (err) {
            res
                .status(500)
                .end(JSON.stringify({ messagge: err, ts: Date.now() }))
            return
        }        
        res
            .status(201)
            .end(JSON.stringify(resultado))
    });

})

router.post('/signin', (req, res) => {
    const {email, password} = req.body
    mongoInterface.query('summerproject', 'usuarios', {email: email}, (err, resultado) => { 
        if (err) {
            res
                .status(500)
                .end(JSON.stringify({ messagge: err, ts: Date.now() }))
            return
        }
        if (resultado < 0) {
            res
                .status(404)
                .end(JSON.stringify({ messagge: 'documento no encontrado', ts: Date.now() }))
            return
        }
        let pass = resultado[0].password;
        if(password != pass) return res.status(401).send({ messagge:'verifique los datos'});

        const token = jwt.sign({ email }, 'supersecret', jwtOptions);
        res
            .status(200)
            .end(JSON.stringify({ token }))
    })
})

export default router;