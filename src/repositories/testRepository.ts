import { prisma, Test } from "@prisma/client";
import client from "../database/prismaClient"

export type TestDataType = Omit<Test, "id">


export  async function insertTest(test: TestDataType){
    await client.test.create({data: test})
}

export async function getTests(){
    const terms = await client.term.findMany({select:{term:true, 
        disciplines:{select:{name:true}}}})

       await getTestsCategories(terms)
      
        const tests = await client.test.findMany({select:{name:true, pdfUrl:true, TeacherDiscipline:{select:{disciplines:{select:{id:true, name:true}}, teacher:{select:{name:true}}}}, Categorie:{select:{name:true, id:true}}}})
        
        await formatTestsOutput(terms, tests)
        
        return terms 
}

async function getTestsCategories(terms: any){
    for(let i = 0; i < terms.length; i ++){
        for(let j = 0; j < terms[i].disciplines.length; j++){
            const testsCategories = [{Projetos:[], Práticas:[], Recuperações:[]}]
            let discipline: any = terms[i].disciplines[j]
            terms[i].disciplines[j]= {...discipline, tests:testsCategories}
        }
    }
}

async function formatTestsOutput(terms: any, tests: any){
    for(let i = 0; i < terms.length;  i++){
        for(let j = 0; j < terms[i].disciplines.length; j++){
            const discipline: any = terms[i].disciplines[j]
            for(let k =0; k < tests.length; k++){
                if(tests[k].TeacherDiscipline.disciplines.name === discipline.name){
                    const {name, pdfUrl} = tests[k]
                    const {name: categorieName} = tests[k].Categorie
                    const {name: teacher} = tests[k].TeacherDiscipline.teacher

                    if(categorieName === "Projeto") discipline.tests[0].Projetos.push({name, pdfUrl, teacher})
                    if(categorieName=== "Prática") discipline.tests[0].Práticas.push({name, pdfUrl, teacher})
                    if(categorieName=== "Recuperação") discipline.tests[0].Recuperações.push({name, pdfUrl, teacher}) 
                }
            }
        }
    }
}



export async function getTestsByInstructor(){
    
   const teachers = await client.teacher.findMany()
   return teachers

}