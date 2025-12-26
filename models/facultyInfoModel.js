const mongoose = require("mongoose")

const facultyInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
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
        required: true,
        trim: true,
        unique: true,
    },
    photo: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
        trim: true,
    },
    dateofjoining: {
        type: Date,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
    },
}, {
    timestamps: true
});
module.exports = mongoose.model("FacultyInfo", facultyInfoSchema)