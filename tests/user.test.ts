import app from "../src/app"
import prisma from "../src/database/prismaClient"
import supertest from "supertest"
import userFactory from "./factories/userFactory"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`
})

const agent = supertest(app)

describe("Testes para a rota de criação de usuário", () => {
    it("Retorna 201 caso os dados do usuário sejam válidos", async() => {
        const user = await userFactory()
        const {status} = await agent.post("/signup").send(user)

        expect(status).toBe(201)

    })

    it("Retorna 409 caso exista um usuário com o mesmo email", async() => {
        const user = await userFactory()
        const {status} =  await agent.post("/signup").send(user)
        expect(status).toBe(201)

        const result= await agent.post("/signup").send(user)
        expect(result.status).toBe(409)
    
    })

})

describe("Testes para a rota de logar o usuário", () => {
    it("Retorna 200 e o token corretamente caso os dados do usuário sejam válidos", () => {

    })

    it("Retorna 401 caso as credenciais do usuário estejam incorretas", () => {

    })

})


afterAll(async () => {
    await prisma.$disconnect()
})