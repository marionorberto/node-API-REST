import Sequelize, { Model } from 'sequelize';

export default class Students extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
