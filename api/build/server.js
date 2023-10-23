"use strict";

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index';
import pkg  from '../package.json';
const server = express();
require('dotenv').config();
server.use(cors());
server.use(helmet());
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
  });
});
////////////////////////////////////////////////////////////////////
// Rutas de prueba, borrar
server.use(require('./routes/productsRoutes.js'));

////////////////////////////////////////////////////////////////////
// Rutas
////////////////////////////////////////////////////////////////////
server.use('/', routes);

////////////////////////////////////////////////////////////////////

module.exports = server;