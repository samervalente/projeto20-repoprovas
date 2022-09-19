import {faker} from "@faker-js/faker"

export default async function testDataFactory(){
    const test = {
        name:faker.lorem.words(2),
        pdfUrl:faker.internet.url(),
        categoryId: 2,
        teacherDisciplineId:2
    }
    
    return test
}