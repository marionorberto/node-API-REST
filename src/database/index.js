import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';
import Students from '../models/Students';
import User from '../models/User';

const connection = new Sequelize(dbConfig);

const models = [Students, User];

models.forEach((model) => model.init(connection));
