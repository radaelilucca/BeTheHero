import cryptoRandomString from 'crypto-random-string';
import * as yup from 'yup';
import Ong from '../models/Ong';

class OngController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      whatsapp: yup.string().required().min(14).max(14),
      city: yup.string().required(),
      uf: yup.string().required().max(2),
    });

    const { name, email, whatsapp, city, uf } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }
    // check if email or whatsapp is in use

    const ong = await Ong.findOne({
      where: {
        email,
      },
    });

    if (ong) {
      return res.status(401).json({ error: 'This e-mail is already in use' });
    }

    // Random ID generator
    const id = Number(cryptoRandomString({ length: 6, type: 'numeric' }));

    await Ong.create({
      name,
      email,
      whatsapp,
      city,
      uf,
      id,
    });

    return res.json(id);
  }

  async index(req, res) {
    const ongs = await Ong.findAll();

    return res.json(ongs);
  }
}

export default new OngController();
