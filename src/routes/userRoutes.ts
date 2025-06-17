import { Router } from "express";
import * as userController from "../api/controllers/user-controller"
import { userValidation } from "../midleware/validations";

const routes = Router()

routes.post("/", userValidation, userController.create)
routes.get("/", userController.getall)
routes.get("/:id", userController.getbyid)
routes.put("/:id", userValidation, userController.updated)
routes.delete("/:id", userController.deleted)

export default routes;
