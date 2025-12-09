const mongoose = require("mongoose")



const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
        minLength: 10,
        maxLength: 10,
        required: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true,
        minLength: 8

    }
})
const registerModel = new mongoose.model("registerFormData", registerSchema)



const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    contactMessage: {
        type: String,
        minLength: 10,
        required: true,
    }
})
const contactModel = new mongoose.model("contactFormData", contactSchema)



module.exports = { registerModel, contactModel }
