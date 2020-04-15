"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Ong = require('../models/Ong'); var _Ong2 = _interopRequireDefault(_Ong);

class SessionController {
  async store(req, res) {
    const { id } = req.params;

    // check if this id exist

    const ong = await _Ong2.default.findByPk(id);

    if (!ong) {
      return res
        .status(404)
        .json({ error: 'Ong not found - Check the Id and try again' });
    }

    const { name } = ong;

    return res.json({ id, name });
  }
}

exports. default = new SessionController();
