const { z } = require("zod");
const lengthError = "minimo 3 caracterees"
const userNameSchema = z.string().min(3, lengthError).max(8)

// console.log(userNameSchema.parse("Jo"));

const { sucess, error } = userNameSchema.safeParse("no")
// const { sucess, error } = userNameSchema.parse("no")

if (!sucess) {
    console.log(error.errors[0].message)
}
