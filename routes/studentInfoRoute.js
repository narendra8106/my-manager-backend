const express = require("express")
const router = express.Router()
const { studentInfo, getStudentInfo, updateStudentInfo, deleteStudentInfo } = require("../controllers/studentInfoController")

router.post("/studentInfo", studentInfo)
router.get("/studentInfo/:id", getStudentInfo)
router.put("/studentInfo/:id", updateStudentInfo)
router.delete("/studentInfo/:id", deleteStudentInfo)


module.exports = router