const facultyInfoModel = require("../models/facultyInfoModel");

const facultyInfo = async (req, res) => {
    try {
        const { name, designation, department, email, phone, photo, qualification, dateofjoining, status } = req.body;

        if (!name && !designation && !department && !email && !phone && !photo && !qualification && !dateofjoining && !status) {
            return res.status(400).json({
                message: "fill all the data fields "
            })
        }
        const existEmail = await facultyInfoModel.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ message: "email already exist" })
        }
        const existPhone = await facultyInfoModel.findOne({ phone })
        if (existPhone) {
            return res.status(400).json({ message: "phone number already registred" })
        }
        const facultyInformation = await facultyInfoModel({ name, designation, department, email, phone, photo, qualification, dateofjoining, status })

        const savedFacultyInfo = await facultyInformation.save()
        return res.status(200).json({
            message: "faculty data added successfully",
            data: savedFacultyInfo
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while adding pada",
            error: error.message
        })
    }
}
const getFacultyInfo = async (req, res) => {
    try {
        const getId = req.params.id;

        const getFacultyInformation = await facultyInfoModel.findOne({ _id: getId })
        return res.status(200).json({
            data: getFacultyInformation
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while fetching faculty data",
            error: error.message
        })
    }
}
const getAllFacultyInfo = async (req, res) => {
    try {

        const getAllFacultyInformation = await facultyInfoModel.find()
        if (!getAllFacultyInformation) {
            return res.status(400).json({
                message: "error while fetching all data",
                error: error.message
            })
        }
        return res.status(200).json({
            data: getAllFacultyInformation
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while fetching all faculty data",
            error: error.message
        })
    }
}
const updateFacultyInfo = async (req, res) => {
    try {
        const updateId = req.params.id;

        const { name, designation, department, email, phone, photo, qualification, dateofjoining, status } = req.body;

        const updateFacultyInformation = await facultyInfoModel.findByIdAndUpdate({ _id: updateId }, { name, designation, department, email, phone, photo, qualification, dateofjoining, status }, { new: true });

        if (!updateFacultyInformation) {
            return res.status(400).json({
                error: "failed to update data"
            })
        }
        return res.status(200).json({
            message: "Faculty updated successfully",
            data: updateFacultyInformation,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error updating faculty information",
            error: error.message,
        });
    }
}
const deleteFaculty = async (req, res) => {
    try {
        const deleteId = req.params.id;
        const deleteFacultyInfo = await facultyInfoModel.findByIdAndDelete({ _id: deleteId })

        if (!deleteFacultyInfo) {
            return res.status(202).json({
                message: "data not found"
            })
        }
        return res.status(200).json({
            message: "faculty information deleted successfully",
            data: deleteFacultyInfo
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while deleting data",
            error: error.message
        })
    }
}
module.exports = { facultyInfo, getFacultyInfo, getAllFacultyInfo, updateFacultyInfo, deleteFaculty }