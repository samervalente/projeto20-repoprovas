import * as authService from "../services/authService"
import bcrypt from "bcrypt"
import {Request, Response, NextFunction} from "express"

export async function validateEmailExistence(req: Request, res: Response, next: NextFunction){
    const {email} = req.body
    const user = await authService.getUser(email)

    if(user){
        throw {type: "conflict", message:"Email already exists"}
    }
    next()
}
export async function ValidateUserLoginData(req: Request, res: Response, next: NextFunction){
    const {email, password} = req.body

    const userDB = await authService.getUser(email)
    if(!userDB){
            throw {type: "unauthorized", message:"Incorrect email or password"}
        }
    const isValidPassword = bcrypt.compareSync(password, userDB.password)

    if(!isValidPassword){
        throw {type: "unauthorized", message:"Incorrect email or password"}
    }

    res.locals.userId = userDB.id    
    
    next()
}