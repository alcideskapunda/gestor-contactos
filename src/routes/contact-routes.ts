import { Router } from "express";
import { contactValidation } from "../midleware/validations";
import * as contactController from "../api/controllers/contact-controller"
const routes = Router()

routes.post("/", contactValidation, contactController.create)
routes.get("/", contactController.getall)
routes.get("/:id", contactController.getbyid)
routes.put("/:id", contactValidation, contactController.updated)
routes.delete("/:id", contactController.deleted)

export default routes;