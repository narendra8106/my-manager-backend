const studentInfoModel = require("../models/studentInfoModel")
const studentInfo = async (req, res) => {
    try {
        const { name, registerNumber, department, section, email, phone, photo, academicYear, admissionType, status } = req.body;

        if (!name && !registerNumber && !department && !section && !email && !phone && !photo && !academicYear && !admissionType && !status) {
            return res.status(400).json({
                message: "fill all the data fields"
            })
        }
        const existEmail = await studentInfoModel.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ message: "email already exist" })
        }
        const existPhone = await studentInfoModel.findOne({ phone })
        if (existPhone) {
            return res.status(400).json({ message: "phone number already registred" })
        }
        const studentInformation = await studentInfoModel({ name, registerNumber, department, section, email, phone, photo, academicYear, admissionType, status })

        const saveStudentInformation = await studentInformation.save()

        return res.status(200).json({
            message: "student data added successfully",
            data: saveStudentInformation
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while adding data",
            error: error.message
        })
    }
}
const getStudentInfo = async (req, res) => {
    try {
        const getId = req.params.id;

        const getStudentInformation = await studentInfoModel.findOne({ _id: getId })
        return res.status(200).json({
            data: getStudentInformation
        })
    } catch (error) {
        return res.status(400).json({
            message: "error while fetching student data",
            error: error.message
        })
    }
}
const updateStudentInfo = async (req, res) => {
    try {
        const { name, registerNumber, department, section, email, phone, photo, academicYear, admissionType, status } = req.body;

        const updateId = req.params.id;

        const updateStudentInformation = await studentInfoModel.findByIdAndUpdate({ _id: updateId }, { name, registerNumber, department, section, email, phone, photo, academicYear, admissionType, status }, { new: true })

        if (!updateStudentInformation) {
            return res.status(400).json({
                message: "failed to update data",
                error: error.message
            })
        }
        return res.status(200).json({
            message: "data updated successfully",
            data: updateStudentInformation
        })

    } catch (error) {
        return res.status(400).json({
            message: "failed to updating data",
            error: error.message
        })
    }
}
const deleteStudentInfo = async (req, res) => {
    try {
        const deleteId = req.params.id;

        const deleteStudentData = await studentInfoModel.findByIdAndDelete({ _id: deleteId })

        if (!deleteStudentData) {
            return res.status(400).json({
                message: "data not found",
                error: error.message
            })
        }

        return res.status(200).json({
            message: "data deleted successfully",
            data: deleteStudentData
        })
    } catch (error) {

    }
}
module.exports = { studentInfo, getStudentInfo, updateStudentInfo, deleteStudentInfo }