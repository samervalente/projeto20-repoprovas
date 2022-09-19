import app from "../src/app";
import prisma from "../src/database/prismaClient"
import testDataFactory from "./factories/testFactory";
import registerDataFactory from "./factories/userFactory"

import supertest from "supertest"

// beforeEach(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY;`
// })

const agent = supertest(app)


describe("Testes para a rota de criação de provas", () => {
    it("Retorna 201 caso os dados da prova sejam válidos", async () => {
        const test = await testDataFactory()
        const user = await registerDataFactory()

        await agent.post("/signup").send(user)
        const {email, password} = user
        const userLogin = {email, password}

        const {body: session} = await agent.post("/signin").send(userLogin)
            
        const token = `Bearer ${session.sessionToken}`
      
        const {status}  = await agent.post("/tests").set({authorization:token}).send(test)

        expect(status).toEqual(201)

    })

    it("Retorna 401 caso o token do usuário seja inválido", async () => {
        const token = "invalidToken"
        const test = await testDataFactory()
        const {status} = await supertest(app).post("/tests").set({authorization: token}).send(test)

        expect(status).toEqual(401)
    })

    it("Retorna 404 quando a categoria da prova não existe", async () => {
        let test = await testDataFactory()
        test = {...test, categoryId:23}
        const user = await registerDataFactory()
        
        await agent.post("/signup").send(user)
        const {email, password} = user
        const userLogin = {email, password}

        const {body: session} = await agent.post("/signin").send(userLogin)
            
        const token = `Bearer ${session.sessionToken}`
      
        const {status} = await supertest(app).post("/tests").set({authorization:token}).send(test)
        expect(status).toEqual(404)
    })

   
})

describe("Testes para a rota de visualizar as provas agrupadas por disciplina", () => {
    it("Retorna 200 e o body como array", async () => {
        const test = await testDataFactory()

        const user = await registerDataFactory()

        await agent.post("/signup").send(user)
        const {email, password} = user
        const userLogin = {email, password}

        const {body: session} = await agent.post("/signin").send(userLogin)
            
        const token = `Bearer ${session.sessionToken}`

        const {status} = await supertest(app).post("/tests").set({authorization:token}).send(test)
        expect(status).toEqual(201)

        const result = await supertest(app).get("/tests").set({authorization:token})

        expect(result.status).toEqual(200)
        expect(result.body).toBeInstanceOf(Array)
        expect(result.body).not.toBeNull()
    })

    it("Retorna 401 caso o token do usuário seja inválido", async() => {
        
        const result = await supertest(app).get("/tests").set({authorization:"invalidToken"})
        expect(result.status).toEqual(401)

    })
})

describe("Testes para a rota de visualizar as provas agrupadas por professores", () => {
    it("Retorna 200 e o body como array", async () => {
        const test = await testDataFactory()
        const user = await registerDataFactory()

        await agent.post("/signup").send(user)
        const {email, password} = user
        const userLogin = {email, password}

        const {body: session} = await agent.post("/signin").send(userLogin)
        const token = `Bearer ${session.sessionToken}`

        const{status} = await supertest(app).post("/tests").set({authorization:token}).send(test)
        expect(status).toEqual(201)

        const result = await supertest(app).get("/tests/instructors").set({authorization:token})
        expect(result.status).toEqual(200)
        expect(result.body).toBeInstanceOf(Array)
        expect(result.body).not.toBeNull()
    })

    it("Retorna 401 caso o token do usuário seja inválido", async () => {
        const test = await testDataFactory()
      
        const user = await registerDataFactory()

        await agent.post("/signup").send(user)
        const {email, password} = user
        const userLogin = {email, password}

        const {body: session} = await agent.post("/signin").send(userLogin)
        const token = `Bearer ${session.sessionToken}`

        const{status} = await supertest(app).post("/tests").set({authorization:token}).send(test)
        expect(status).toEqual(201)

        const result = await supertest(app).get("/tests/instructors").set({authorization:"invalidToken"})
        expect(result.status).toEqual(401)

    })
})


afterAll(async () => {
    await prisma.$disconnect()
})