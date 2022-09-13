
import { User } from "@prisma/client";
import client from "../database/prismaClient"

export type AuthDataType = Omit<User, 'id' | 'createdAt'>

export async function getUserById(id: number){
    const user = await client.user.findFirst({where: {id}})
    return user
}

export async function getUserByEmail(email: string){
    const user = await client.user.findFirst({where: {email}})
    return user
}


export async function insertUser(userData: AuthDataType){
    
    await client.user.create({data: userData})
}