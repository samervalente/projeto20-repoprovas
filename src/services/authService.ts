import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import * as authRepository from "../repositories/authRepository"
import dotenv from "dotenv"
import userDataType from "../types/userType"

dotenv.config()


export async function getUserById(userId: number){
    const user = await authRepository.getUserById(userId)
    return user
}

export async function getUser(email: string){
    const user = await authRepository.getUserByEmail(email)
    return user
}

export async function registerUser(userData: userDataType){
    const {password} = userData
    userData.password = bcrypt.hashSync(password, 10)
    
    return await authRepository.insertUser(userData)
}


export async function loginUser(userId: number){
    const secret_key = String(process.env.SECRET_KEY)
    const token = jwt.sign({id: userId}, secret_key)
    
    return token
}
