import {Request, Response} from "express"
import * as authService from "../services/authService"

export async function registerUser(req: Request, res: Response){
    const userData = req.body
    delete userData.confirmPassword
    const createdUser = await authService.registerUser(userData)
    
    res.status(201).send(createdUser)
    
}

export async function loginUser(req: Request, res: Response){
    const userId = res.locals.userId
    
    const token = await authService.loginUser(userId)

    res.status(200).send({sessionToken: token})
}
