import Recipient from '../models/Recipients';

class RecipientController {
  async store(req, res) {
    const userExist = await Recipient.findOne({
      where: { email: req.body.email },
    });

    if (userExist) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const {
      id,
      nome,
      rua,
      complemento,
      estado,
      cidade,
      cep,
      numero,
      email,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      nome,
      rua,
      complemento,
      estado,
      cidade,
      cep,
      numero,
      email,
    });
  }

  async update(req, res) {
    const user = await Recipient.findByPk(req.userId);

    const {
      nome,
      rua,
      complemento,
      estado,
      cidade,
      cep,
      numero,
      email,
    } = await user.update(req.body);

    return res.json({
      nome,
      rua,
      complemento,
      estado,
      cidade,
      cep,
      numero,
      email,
    });
  }
}

export default new RecipientController();
