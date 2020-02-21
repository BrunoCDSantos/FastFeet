import * as Yup from 'yup';

import Recipient from '../models/Recipients';

class RecipientsController {
  // cria recipient
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      stret: Yup.string().required(),
      number: Yup.number()
        .positive()
        .required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      stret,
      number,
      complement,
      state,
      city,
      zipCode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      stret,
      number,
      complement,
      state,
      city,
      zipCode,
    });
  }

  // atualiza
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      stret: Yup.string().required(),
      number: Yup.number().positive(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zipCode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not registered...' });
    }
    await recipient.update(req.body);

    const {
      name,
      stret,
      number,
      complement,
      state,
      city,
      zipCode,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      stret,
      number,
      complement,
      state,
      city,
      zipCode,
    });
  }
}

export default new RecipientsController();
