"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Incident = require('../models/Incident'); var _Incident2 = _interopRequireDefault(_Incident);
// import Ong from '../models/Ong';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.auth;
    const { page = 1 } = req.query;

    const incidents = await _Incident2.default.findAndCountAll({
      where: {
        ong_id,
      },
      limit: 4,
      offset: (page - 1) * 4,
    });
    res.set('totalIncidents', incidents.count);
    return res.json(incidents);
  }
}

exports. default = new ProfileController();
