import Sequelize from 'sequelize';

// Configuração banco de dados
import databaseConfig from '../config/database';

import User from '../App/models/User';
import Recipients from '../App/models/Recipients';

const models = [User, Recipients];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
