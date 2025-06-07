const { Router } = require('express');
const TurnosController = require('../controllers/API/turnos.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get('/api/v1/turnos/:idPaciente', verifyTokenMiddleware, TurnosController.obtenerTurnosPorPaciente);
rutaTurnos.delete('/api/v1/turnos/:idTurno', verifyTokenMiddleware, TurnosController.cancelarTurno);
rutaTurnos.post('/api/v1/turnos', verifyTokenMiddleware, TurnosController.crearTurno); // Nueva ruta

module.exports = rutaTurnos;
