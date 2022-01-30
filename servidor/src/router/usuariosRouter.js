import express from "express";
import { buscarUsuario, buscarTodos } from './../controllers/usuariosController.js';

const router = express.Router();

router.get('/usuarios', buscarTodos);
router.get('/usuario/:id', buscarUsuario);

export default router;