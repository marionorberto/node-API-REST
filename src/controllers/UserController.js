import User from '../models/User';

class HomeController {
  // index
  async index(req, res) {
    try {
      const users = await User.findAll();

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

      return res.status(200).json(user);
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
      const user = await User.findByPk(req.params.id);

      return res.status(200).json(user);
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
      const { id } = req.params;
      const user = await User.destroy({ where: { id } });

      return res.status(200).json({
        user: 'deleted',
        id: user.id,
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
      const { id } = req.params;

      const user = await User.update(req.body, { where: { id } });

      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new HomeController();
