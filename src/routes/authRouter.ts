import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidatorMiddleware";
import userSchema from "../schemas/authSchema";

import {validateEmailExistence, ValidateUserLoginData} from "../middlewares/authMiddleware"
import {registerUser, loginUser} from "../controllers/authController"

const routes = Router()

routes.post("/signup", 
schemaValidator(userSchema), validateEmailExistence, registerUser )

routes.post("/signin", schemaValidator(userSchema), ValidateUserLoginData, loginUser)

export default routes