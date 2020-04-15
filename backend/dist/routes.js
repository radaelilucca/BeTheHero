"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// import Controllers

var _OngController = require('./app/controllers/OngController'); var _OngController2 = _interopRequireDefault(_OngController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _IncidentController = require('./app/controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);
var _ProfileController = require('./app/controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = _express.Router.call(void 0, );

// Create Ong

routes.post('/ongs', _OngController2.default.store);

// Create session
routes.post('/sessions/:id', _SessionController2.default.store);

// List all incidents
routes.get('/incidents/', _IncidentController2.default.index);

// List all ongs
routes.get('/ongs', _OngController2.default.index);

// ------------------- Login required routes ---------------------
routes.use(_auth2.default);

routes.delete('/incidents/delete/:incident_id', _IncidentController2.default.delete);

// Create incident
routes.post('/incidents/create', _IncidentController2.default.store);

// List incidents of logged ong
routes.get('/profile', _ProfileController2.default.index);

// update incident
routes.put('/incidents/:id', _IncidentController2.default.update);

exports. default = routes;
