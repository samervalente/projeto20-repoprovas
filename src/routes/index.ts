import { Router } from "express";
import authRouter from "./authRouter"
import validateToken from "../middlewares/tokenValidatorMIddleware";
import testRouter from "./testRouter"

const routes = Router()

routes.use(authRouter)
routes.use(validateToken)
routes.use(testRouter)


export default routes