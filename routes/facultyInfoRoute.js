const express = require("express")
const router = express.Router()
const { facultyInfo, getFacultyInfo, updateFacultyInfo, deleteFaculty, getAllFacultyInfo } = require("../controllers/facultyInfoController")

router.post("/facultyInfo", facultyInfo)
router.get("/facultyInfo/:id", getFacultyInfo)
router.get("/allFacultyData", getAllFacultyInfo)
router.put("/facultyInfo/:id", updateFacultyInfo)
router.delete("/facultyInfo/:id", deleteFaculty)

module.exports = router
