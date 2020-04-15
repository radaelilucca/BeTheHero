import Ong from "../models/Ong";

class SessionController {
  async store(req, res) {
    const { id } = req.params;

    // check if this id exist

    const ong = await Ong.findByPk(id);

    if (!ong) {
      return res
        .status(404)
        .json({ error: "Ong not found - Check the Id and try again" });
    }

    const { name } = ong;

    return res.json({ id, name });
  }
}

export default new SessionController();
