import * as yup from "yup";
import Ong from "../models/Ong";
import Incident from "../models/Incident";

class IncidentController {
  async store(req, res) {
    const { title, description, amount } = req.body;

    const schema = yup.object().shape({
      title: yup.string().required().min(3),
      description: yup.string().required().min(3),
      amount: yup.string().required().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Validation fails" });
    }

    const { ongId } = req;

    const ong = await Ong.findByPk(ongId);

    // check the logged ong

    if (!ong) {
      return res
        .status(401)
        .json({ error: "Only logged ONGs can create an Incident" });
    }

    const incident = await Incident.create({
      ong_id: ong.id,
      title,
      description,
      amount,
    });

    return res.json(incident);
  }

  async update(req, res) {
    const { id } = req.params;

    const incident = await Incident.findByPk(id);

    if (!incident) {
      return res.status(404).json({ error: "Case not found" });
    }

    if (incident.ong_id != req.headers.auth) {
      return res
        .status(401)
        .json({ error: "You can only update cases of your ONG" });
    }

    const { title, description, amount } = await incident.update(req.body);

    return res.json({ title, description, amount });
  }

  async delete(req, res) {
    const { incident_id } = req.params;
    const ongId = Number(req.ongId);
    const incident = await Incident.findByPk(incident_id);

    // check if incident exist
    if (!incident) {
      return res
        .status(404)
        .json({ error: "Incident not found - Check the ID and try again" });
    }

    if (Number(incident.ong_id) !== ongId) {
      return res
        .status(401)
        .json({ error: "Incidents can only be deleted by the creator" });
    }

    await incident.destroy();

    return res.status(204).send();
  }

  // list all incidents
  async index(req, res) {
    const { page = 1 } = req.query;
    const incidents = await Incident.findAndCountAll({
      limit: 4,
      offset: (page - 1) * 4,
      order: ["created_at"],
      include: [
        {
          model: Ong,
          as: "ong",
          attributes: ["id", "name", "city", "uf", "whatsapp", "email"],
        },
      ],
    });
    res.set("count", incidents.count);
    return res.json(incidents.rows);
  }

  // get one incident

  async show(req, res) {
    const { id } = req.params;

    const incident = await Incident.findByPk(id);

    if (!incident) {
      return res.status(404).json({ error: "Incident not found." });
    }

    return res.json(incident);
  }
}

export default new IncidentController();
