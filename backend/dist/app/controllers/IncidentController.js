"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);
var _Ong = require('../models/Ong'); var _Ong2 = _interopRequireDefault(_Ong);
var _Incident = require('../models/Incident'); var _Incident2 = _interopRequireDefault(_Incident);

class IncidentController {
  async store(req, res) {
    const { title, description, amount } = req.body;

    const schema = yup.object().shape({
      title: yup.string().required().min(3),
      description: yup.string().required().min(3),
      amount: yup.string().required().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }

    const { ongId } = req;

    const ong = await _Ong2.default.findByPk(ongId);

    // check the logged ong

    if (!ong) {
      return res
        .status(401)
        .json({ error: 'Only logged ONGs can create an Incident' });
    }

    const incident = await _Incident2.default.create({
      ong_id: ong.id,
      title,
      description,
      amount,
    });

    return res.json(incident);
  }

  async update(req, res) {
    const { id } = req.params;

    const incident = await _Incident2.default.findByPk(id);

    if (!incident) {
      return res.status(404).json({ error: 'Case not found' });
    }

    if (incident.ong_id != req.headers.auth) {
      return res
        .status(401)
        .json({ error: 'You can only update cases of your ONG' });
    }

    const { title, description, amount } = await incident.update(req.body);

    return res.json({ title, description, amount });
  }

  async delete(req, res) {
    const { incident_id } = req.params;
    const ongId = Number(req.ongId);
    const incident = await _Incident2.default.findByPk(incident_id);

    // check if incident exist
    if (!incident) {
      return res
        .status(404)
        .json({ error: 'Incident not found - Check the ID and try again' });
    }

    if (Number(incident.ong_id) !== ongId) {
      return res
        .status(401)
        .json({ error: 'Incidents can only be deleted by the creator' });
    }

    await incident.destroy();

    return res.status(204).send();
  }

  // list all incidents
  async index(req, res) {
    const { page = 1 } = req.query;
    const incidents = await _Incident2.default.findAndCountAll({
      limit: 4,
      offset: (page - 1) * 4,
      include: [
        {
          model: _Ong2.default,
          as: 'ong',
          attributes: ['id', 'name', 'city', 'uf', 'whatsapp', 'email'],
        },
      ],
    });
    res.set('count', incidents.count);
    return res.json(incidents.rows);
  }
}

exports. default = new IncidentController();
