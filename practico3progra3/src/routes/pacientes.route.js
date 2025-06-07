const { Router } = require('express');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const autenticadorController = require('../controllers/API/autenticacion.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const rutaPacientes = Router();
rutaPacientes.post('/login', autenticadorController.login);
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post('/', verifyTokenMiddleware, pacientesController.create);
rutaPacientes.put('/:id', verifyTokenMiddleware, pacientesController.update);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesController.delete);

module.exports = rutaPacientes;
