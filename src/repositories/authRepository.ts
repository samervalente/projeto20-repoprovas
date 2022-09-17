
import client from "../database/prismaClient"
import userDataType from "../types/userType"

export async function getUserById(id: number){
    const user = await client.user.findFirst({where: {id}})
    return user
}

export async function getUserByEmail(email: string){
    const user = await client.user.findFirst({where: {email}})
    return user
}


export async function insertUser(userData: userDataType){
    return await client.user.create({data: userData})
}