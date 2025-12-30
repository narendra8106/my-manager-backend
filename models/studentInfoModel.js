const mongoose = require("mongoose")

const studentInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    registerNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    section: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    },
    admissionType: {
        type: String,
        enum: ["Convener", "Management", "Lateral Entry"],
        default: "Convener",
    },

    status: {
        type: String,
        enum: ["Active", "Passed Out", "Discontinued"],
        default: "Active",
    },

}, { timestamps: true })

module.exports = mongoose.model("StudentInfo", studentInfoSchema)