import { Router } from "express";
import authRouter from "./authRouter"
import testRouter from "./testRouter"

const routes = Router()

routes.use(authRouter)
routes.use(testRouter)

export default routes