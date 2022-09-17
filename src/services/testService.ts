import * as testRepository from "../repositories/testRepository";
import testDataType from "../types/testType";


export async function createTest(test: testDataType){
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