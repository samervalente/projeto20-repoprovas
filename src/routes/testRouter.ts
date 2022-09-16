import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidatorMiddleware";
import testSchema from "../schemas/testSchema";
import { createTest, getTests, getTestsByInstructor } from "../controllers/testController";

const routes = Router()

routes.post("/tests", schemaValidator(testSchema), createTest)
routes.get("/tests", getTests)
routes.get("/tests/instructors", getTestsByInstructor)

export default routes