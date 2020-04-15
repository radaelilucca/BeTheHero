"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cryptorandomstring = require('crypto-random-string'); var _cryptorandomstring2 = _interopRequireDefault(_cryptorandomstring);
var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);
var _Ong = require('../models/Ong'); var _Ong2 = _interopRequireDefault(_Ong);

class OngController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      whatsapp: yup.string().required().min(14).max(14),
      city: yup.string().required(),
      uf: yup.string().required().max(2),
    });

    const { name, email, whatsapp, city, uf } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }
    // check if email or whatsapp is in use

    const ong = await _Ong2.default.findOne({
      where: {
        email,
      },
    });

    if (ong) {
      return res.status(401).json({ error: 'This e-mail is already in use' });
    }

    // Random ID generator
    const id = Number(_cryptorandomstring2.default.call(void 0, { length: 6, type: 'numeric' }));

    await _Ong2.default.create({
      name,
      email,
      whatsapp,
      city,
      uf,
      id,
    });

    return res.json(id);
  }

  async index(req, res) {
    const ongs = await _Ong2.default.findAll();

    return res.json(ongs);
  }
}

exports. default = new OngController();
