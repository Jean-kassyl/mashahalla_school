const Joi = require("joi")
const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    valeur: {
        type: Number,
        required: true,
        min: 0,
        max: 20
    },
    type: {
        type: String,
        required: true,    
    },
    periode: {
        type: String,
        required: true
    }
    
})


const Note = mongoose.model("Note", noteSchema)

function validateNote(note){
    const schema = {
        valeur: Joi.Number().min(0).max(20).required(),
        type: Joi.string().required(),
        periode: Joi.string().required()
    }

    return Joi.validate(note, schema)
}


module.exports = {
    Note,
    validateNote,
    noteSchema
}