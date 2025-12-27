const express = require("express")
const router = express.Router()
const { studentInfo, getStudentInfo, updateStudentInfo, deleteStudentInfo, getAllStudentsInfo } = require("../controllers/studentInfoController")

router.post("/studentInfo", studentInfo)
router.get("/studentInfo/:id", getStudentInfo)
router.get("/allStudentsInfo", getAllStudentsInfo)
router.put("/studentInfo/:id", updateStudentInfo)
router.delete("/studentInfo/:id", deleteStudentInfo)


module.exports = router