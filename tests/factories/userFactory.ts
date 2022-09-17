import {faker} from "@faker-js/faker"

interface IRegisterData{
    email:string;
    password:string;
    confirmPassword:string;
}




export async function registerDataFactory(){
    const user: IRegisterData = {
        email:faker.internet.email(),
        password:"123",
        confirmPassword:"123"
    }

    return user
}

