import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidatorMiddleware";
import {registerSchema, loginSchema} from "../schemas/authSchema";

import {validateRegisterData, validateLoginData} from "../middlewares/authMiddleware"
import {registerUser, loginUser} from "../controllers/authController"


const routes = Router()

routes.post("/signup", schemaValidator(registerSchema), validateRegisterData, registerUser )
routes.post("/signin", schemaValidator(loginSchema), validateLoginData, loginUser)

export default routes