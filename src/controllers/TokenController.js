import jwt from 'jsonwebtoken';
import User from '../models/User';

require('dotenv').config();

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['invalid credencials'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['user invalid'],
      });
    }

    if (!(await user.isPasswordValid(password))) {
      return res.status(401).json({
        errors: ['password invalid'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({
      token,
    });
  }
}
export default new TokenController();
