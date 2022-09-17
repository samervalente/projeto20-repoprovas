import * as authService from "../services/authService"
import bcrypt from "bcrypt"
import {Request, Response, NextFunction} from "express"

export async function validateRegisterData(req: Request, res: Response, next: NextFunction){
    const {email, password, confirmPassword} = req.body
    const user = await authService.getUser(email)

    if(confirmPassword === undefined){
        throw {type:"invalid_body", message:"Confirm password is required"}
    }

    if(password !== confirmPassword){
        throw {type:"bad_request", message:"Passwords are differents"}
    }

    if(user){
        throw {type: "conflict", message:"Email already exists"}
    }

    delete req.body.confirmPassword
    next()
}
export async function validateLoginData(req: Request, res: Response, next: NextFunction){
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