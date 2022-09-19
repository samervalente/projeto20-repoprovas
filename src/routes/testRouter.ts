import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidatorMiddleware";
import testSchema from "../schemas/testSchema";
import { createTest, getTests, getTestsByInstructor } from "../controllers/testController";
import validateToken from "../middlewares/tokenValidatorMIddleware";

const routes = Router()

routes.use(validateToken)
routes.post("/tests", schemaValidator(testSchema), createTest)
routes.get("/tests", getTests)
routes.get("/tests/instructors", getTestsByInstructor)

export default routes