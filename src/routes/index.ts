import { Router } from "express";
import userRouter from "./user-routes";
import contactRouter from "./contact-routes";

const url = '/v1/api'
const router = Router()

router.use(`${url}/users`, userRouter)
router.use(`${url}/contact`, contactRouter)

export default router;