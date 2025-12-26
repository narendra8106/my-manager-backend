const express = require("express")
const router = express.Router()
const { facultyInfo, getFacultyInfo, updateFacultyInfo, deleteFaculty } = require("../controllers/facultyInfoController")

router.post("/facultyInfo", facultyInfo)
router.get("/facultyInfo/:id", getFacultyInfo)
router.put("/facultyInfo/:id", updateFacultyInfo)
router.delete("/facultyInfo/:id", deleteFaculty)

module.exports = router
