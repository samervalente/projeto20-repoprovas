import { Test } from "@prisma/client";
import client from "../database/prismaClient"

export type TestDataType = Omit<Test, "id">


export  async function insertTest(test: TestDataType){
    await client.test.create({data: test})
}

export async function getTests(){
   
    const tests = await client.term.findMany(
        {select:{term:true, 
        disciplines:{select:{name:true, TeacherDiscipline:{select:{
            teacher:{select:{name:true}},
            tests:{select:{name:true,
                Categorie:{select:{name:true}}}}}}}}}})

    return tests
}


export async function getTestsByInstructor(){
    const teachers = await client.teacher.findMany({select:{name:true, id:true}})
    const TeacherDiscipline = await client.teacherDiscipline.findMany({})

    const categories = await client.categorie.findMany({select:{name:true, tests:{select:{name:true, pdfUrl:true, TeacherDiscipline:{select:{teacher:{select:{name:true, id:true}}}}}}}})

    const tests = await client.test.findMany({select:{Categorie:{select:{name:true}}, name:true, pdfUrl:true, TeacherDiscipline:{select:{teacher:{select:{id:true}}}}}})
   

    for(let i = 0; i < teachers.length; i ++){
        for(let j = 0; j < categories.length; j++){
            const categorie =  categories[j].name
            

        }
    }
    return {categories}


    
}