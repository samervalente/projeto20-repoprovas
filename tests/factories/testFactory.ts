import {faker} from "@faker-js/faker"

export default function testFactory(){
    return {
        name:faker.name ,
        pdfUrl:faker.internet.url(),
        categoryId: faker.random.numeric(),
        teacherDisciplineId:faker.random.numeric()
    }
}