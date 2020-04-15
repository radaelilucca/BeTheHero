import Incident from '../models/Incident';
// import Ong from '../models/Ong';

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.auth;
    const { page = 1 } = req.query;

    const incidents = await Incident.findAndCountAll({
      where: {
        ong_id,
      },
      limit: 4,
      offset: (page - 1) * 4,
    });
    res.set('totalIncidents', incidents.count);
    return res.json(incidents);
  }
}

export default new ProfileController();
