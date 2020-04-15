"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Incident extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: _sequelize2.default.STRING,
        description: _sequelize2.default.STRING,
        amount: _sequelize2.default.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' });
  }
}

exports. default = Incident;
