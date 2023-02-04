const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');

// Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

module.exports = routes;