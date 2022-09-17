import app from "../src/app";
import prisma from "../src/database/prismaClient"

import supertest from "supertest"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`
})

const agente = supertest(app)


describe("Testes para a rota de criação de provas", () => {
    it("Retorna 201 caso os dados da prova sejam válidos", () => {

    })

    it("Retorna 401 caso o token do usuário seja inválido", () => {

    })

    it("Retorna 409 caso tente criar a prova com nomes iguais", () => {

    })

    it("Retorna 404 quando a categoria da prova não existe", () => {

    })

  

})

describe("Testes para a rota de visualizar as provas agrupadas por disciplina", () => {
    it("Retorna 200 e o body como array", () => {

    })

    it("Retorna 401 caso o token do usuário seja inválido", () => {

    })

})

describe("Testes para a rota de visualizar as provas agrupadas por professores", () => {
    it("Retorna 200 e o body como array", () => {

    })

    it("Retorna 401 caso o token do usuário seja inválido", () => {

    })

  
})


afterAll(async () => {
    await prisma.$disconnect()
})