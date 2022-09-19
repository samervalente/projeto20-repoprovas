import app from "../src/app"
import prisma from "../src/database/prismaClient"
import supertest from "supertest"
import registerDataFactory from "./factories/userFactory"

beforeEach(async () => {
    await prisma.$executeRaw` TRUNCATE TABLE users RESTART IDENTITY;
    `
})

const agent = supertest(app)

describe("Testes para a rota de criação de usuário", () => {
    it("Retorna 201 caso os dados do usuário sejam válidos", async() => {
        const user = await registerDataFactory()
        const {status, body: userOnDB} = await agent.post("/signup").send(user)
        
        const isUserCreated = userOnDB.email === user.email

        expect(status).toEqual(201)
        expect(isUserCreated).toBeTruthy()

    })

    it("Retorna 409 caso exista um usuário com o mesmo email", async() => {
        const user = await registerDataFactory()

        const {status} =  await agent.post("/signup").send(user)
        expect(status).toEqual(201)
      
        const result = await agent.post("/signup").send(user)
        expect(result.status).toEqual(409)
    })
})

describe("Testes para a rota de logar o usuário", () => {
    it("Retorna 200 e o token corretamente caso os dados do usuário sejam válidos", async() => {
        const user = await registerDataFactory()
        const result = await agent.post("/signup").send(user)
        expect(result.status).toEqual(201)

        const {email, password} = user
        const userLogin = {email, password}
       
        const {status, body} = await agent.post("/signin").send(userLogin)
    
        expect(status).toEqual(200)
        expect(body.sessionToken).not.toBeNull()
    })

  

    it("Retorna 401 caso as credenciais do usuário estejam incorretas", async () => {
        const user = {email:"emailInexistente@gmail.com", password:"123"}

        const {status} = await agent.post("/signin").send(user)
        expect(status).toEqual(401)
    })

    it("Retorna 422 caso o formato das credenciais esteja incorreto", async() => {
         const user = {email:""}

         const {status} = await agent.post("/signin").send(user)   
         expect(status).toEqual(422)
        
    })

})


afterAll(async () => {
    await prisma.$disconnect()
})