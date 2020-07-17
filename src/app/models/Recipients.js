import Sequelize, { Model } from 'sequelize';

class Recipients extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cidade: Sequelize.STRING,
        rua: Sequelize.STRING,
        cep: Sequelize.STRING,
        complemento: Sequelize.STRING,
        numero: Sequelize.STRING,
        estado: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipients;
