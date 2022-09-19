import {faker} from "@faker-js/faker"


export default async function registerDataFactory(){
    const user = {
        email:faker.internet.email(),
        password:"123",
        confirmPassword:"123"
    }

    return user
}

