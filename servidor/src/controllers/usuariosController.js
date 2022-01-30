import usuariosRepository from './../repositories/usuarioRepository.js';

const buscarUsuario = async (req, res) => {
    try {
        let id = req.params.id;
        let metadata = await usuariosRepository.obtenerTodos(id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify(metadata));
    } catch (error) {
        if (err) {
            res.status(500).end(JSON.stringify({ error: 'se produjo un error.' }));
            return;
        }
    }
}

const buscarTodos = async (req, res) => {
    try {
        let metadata = await usuarios.obtenerPorId();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify(metadata));
    } catch (err) {
        if (err) {
            res.status(500).end(JSON.stringify({ Error: 'Se produjo un error al recuperar peliculas.' }));
            return;
        }
    }
}

export default [
    buscarTodos,
    buscarUsuario
]
