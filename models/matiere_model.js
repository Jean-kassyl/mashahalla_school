const Joi = require("joi")
const mongoose = require("mongoose")


const matiereSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minLength: 1
    },
    note: {
        type: [noteSchema],
    },
    classe: {
        type: String,
        required: true,
        maxLength: 3,
    },
})


const Matiere = mongoose.model("Matiere", matiereSchema)

function validateMatiere(matiere){
    const schema = {
        nom: Joi.string().min(3).max(50).required(),
        classe: Joi.string().min(3).max(50).required()
    }

    return Joi.validate(matiere, schema)
}


module.exports = {
    Matiere,
    validateMatiere,
    matiereSchema
}