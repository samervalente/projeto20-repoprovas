# <p align = "center"> Projeto 20 - Repoprovas </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Samer Valente-4dae71?style=flat-square" />
 
</p>


##  :clipboard: Descrição

Neste 20° projeto, denonimado "repoprovas", é implementado um sistema completo de autorização de usuário tal como registar, logar e validar o mesmo. Além disso, o objetivo principal do projeto é  poder criar e visualizar provas, agrupadas por disciplinas, sendo esta agrupadas por período. Também é possível visualizar as provas ordenadas pelos seus respectivos instrutores e categorias como: projetos, práticas e recuperações.
***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Prisma

***

## :rocket: Rotas

```yml
POST /cadastro
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
POST /tests (autenticada)
    - Rota para criar provas
    - headers: { "Authorization": "Bearer $token" }
    - body: {
      "name":"Projeto de HTML/CSS",
      "pdfUrl":"http://tudosobreHtmleCss.com.br",
      "categoryId":1,
      "teacherDisciplineId":1
   }
```

```yml
GET /tests
    - Rota para listar as provas agrupadas por disciplina
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /tests/instructors
    - Rota para listar as provas agrupadas por instrutor
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

***

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/samervalente/projeto20-repoprovas.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
