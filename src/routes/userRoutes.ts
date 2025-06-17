import { Router } from "express";
import * as userController from "../api/controllers/user-controller"
import { userValidation } from "../midleware/validations";

const routes = Router()

routes.post("/", userValidation, userController.create)

export default routes;
