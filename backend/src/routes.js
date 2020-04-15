import { Router } from "express";

// import Controllers

import OngController from "./app/controllers/OngController";
import SessionController from "./app/controllers/SessionController";
import IncidentController from "./app/controllers/IncidentController";
import ProfileController from "./app/controllers/ProfileController";

import authMiddleware from "./app/middlewares/auth";

const routes = Router();

// Create Ong

routes.post("/ongs", OngController.store);

// Create session
routes.post("/sessions/:id", SessionController.store);

// List all incidents
routes.get("/incidents/", IncidentController.index);
// Get one incident

// List all ongs
routes.get("/ongs", OngController.index);

// ------------------- Login required routes ---------------------
routes.use(authMiddleware);

routes.delete("/incidents/delete/:incident_id", IncidentController.delete);

// Create incident
routes.post("/incidents/create", IncidentController.store);

// List incidents of logged ong
routes.get("/profile", ProfileController.index);

// update incident
routes.put("/incidents/:id", IncidentController.update);

// Get an incident
routes.get("/incident/:id", IncidentController.show);

export default routes;
