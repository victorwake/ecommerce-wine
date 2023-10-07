const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes/index');
const pkg = require('../package.json');
const server = express();
require('dotenv').config();

server.use(cors());
server.use(helmet())
server.use(express.json());
server.use(morgan('dev'));

////////////////////////////////////////////////////////////////////
// Obtener los datos del packagejson
////////////////////////////////////////////////////////////////////
server.set('pkg', pkg);
server.get('/pkg', (req, res) => {
    res.json({
        name: server.get('pkg').name,
        author: server.get('pkg').author,
        description: server.get('pkg').description,
        version: server.get('pkg').version,
        dependencies: server.get('pkg').dependencies
    })
})
////////////////////////////////////////////////////////////////////
// Rutas de prueba, borrar
server.use(require('./routes/productsRoutes.js'))

////////////////////////////////////////////////////////////////////
// Rutas
////////////////////////////////////////////////////////////////////
server.use('/', routes);

////////////////////////////////////////////////////////////////////


module.exports = server;