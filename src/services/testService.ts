import * as testRepository from "../repositories/testRepository";
import testDataType from "../types/testType";


export async function createTest(test: testDataType){
    const {categoryId, teacherDisciplineId} = test
    
    const categorie = await testRepository.getCategoryById(categoryId)
    if(!categorie){
        throw {type:"not_found", message:"Categorie not found"}
    }

    const teacherDiscipline = await testRepository.getTeacherDisciplineById(teacherDisciplineId)
    if(!teacherDiscipline){
        throw {type:"not_found", message:"Teacher discipline not found"}
    }

    return await testRepository.insertTest(test)
}

export async function getTests(){
    const tests = await testRepository.getTests()
    return tests
}

export async function getTestsByInstructor(){
    const tests = await testRepository.getTestsByInstructor()
    return tests
}