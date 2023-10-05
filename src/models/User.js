import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'allows 3 to 50 caracters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: '*email* must be unique',
        },
        validate: {
          isEmail: {
            msg: 'invalid email',
          },
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 60],
            msg: 'password range must be between 8 to 60',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    this.addHook('beforeCreate', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 10);
    });
  }

  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
