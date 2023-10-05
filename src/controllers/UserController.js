import User from '../models/User';

class HomeController {
  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'username', 'email'] });

      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({
        errors: [err],
      });
    }
  }

  // store
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const {
        id, username, email, password, password_hash,
      } = user;
      return res.status(200).json({
        id, username, email, password, password_hash,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(401).json({
          errors: ['user invalid'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(401).json({
          errors: ['user not found'],
        });
      }

      const { id, username, email } = user;
      return res.status(200).json({
        id, username, email,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(401).json({
          errors: ['user not found'],
        });
      }
      const { id } = user;
      await User.destroy({ where: { id } });

      return res.status(200).json({
        state: 'user deleted',
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(401).json({
          errors: ['user not found'],
        });
      }

      const newData = await user.update(req.body);

      const {
        id, username, email, password,
      } = newData;

      return res.status(200).json({
        id, username, email, password,
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new HomeController();
