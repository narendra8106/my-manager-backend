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
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
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
