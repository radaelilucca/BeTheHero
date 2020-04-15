"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Ong extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        whatsapp: _sequelize2.default.STRING,
        city: _sequelize2.default.STRING,
        uf: _sequelize2.default.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

exports. default = Ong;
