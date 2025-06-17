import { Router } from "express";
import userRouter from "./userRoutes";

const url = '/v1/api'
const router = Router()

router.use(`${url}/users`, userRouter)

export default router;