import joi from "joi"


const testSchema = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required(),
    categoryId: joi.number().required(),
    teacherDisciplineId:joi.number().required()
})

export default testSchema