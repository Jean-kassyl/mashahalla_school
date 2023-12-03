const Joi = require("joi")
const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    prenom: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    age: {
        type: Number,
        required: true,
        min: 4,
        max: 15
    },
    classe: {
        type: String,
        required: true,
        maxLength: 3,
    },
   matieres: {
    type: [matiereSchema],
   },
   parents: {
    type: [parentSchema],
   }
})


const Student = mongoose.model("Student", studentSchema)

function validateStudent(student){
    const schema = {
        nom: Joi.string().min(3).max(50).required(),
        prenom: Joi.string().min(3).max(50).required(),
        age: Joi.number().min(4).max(15).required(),
        classe: Joi.string().min(3).max(50).required()
    }

    return Joi.validate(student, schema)
}


module.exports = {
    Student,
    validateStudent
}