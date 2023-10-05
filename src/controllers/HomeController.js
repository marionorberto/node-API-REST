import Students from '../models/Students';

class HomeController {
  async store(req, res) {
    try {
      const students = await Students.create({
        name: 'Mário',
        surname: 'Norberto',
        weight: 55.4,
        height: 1.78,
      });

      return res.status(200).json(students);
    } catch (err) {
      return res.status(400).json({
        errors: [err],
      });
    }
  }
}

export default new HomeController();
