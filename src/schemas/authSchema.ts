import joi from "joi"

const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword:joi.ref("password")
})

export default userSchema