import * as testRepository from "../repositories/testRepository";



export async function createTest(test: testRepository.TestDataType){
    await testRepository.insertTest(test)
}

export async function getTests(){
    const tests = await testRepository.getTests()
    return tests
}

export async function getTestsByInstructor(){
    const tests = await testRepository.getTestsByInstructor()
    return tests
}