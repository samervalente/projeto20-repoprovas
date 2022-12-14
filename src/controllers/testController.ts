import {Request, Response} from "express"
import * as testService from "../services/testService"


export async function createTest(req: Request, res: Response){
    const test = req.body

    await testService.createTest(test)
    res.status(201).send("Test created successfully")
}

export async function getTests(req: Request, res: Response){
    const tests = await testService.getTests()
    res.status(200).send(tests)
}

export async function getTestsByInstructor(req: Request, res: Response){
    const tests = await testService.getTestsByInstructor()
    res.status(200).send(tests)
}