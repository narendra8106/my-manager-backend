const express = require("express")
const router = express.Router()
const { facultyInfo, getFacultyInfo, updateFacultyInfo, deleteFaculty, getAllFacultyInfo } = require("../controllers/facultyInfoController")
const { storedFacultyPhoto } = require("../middlewares/uploadImageMiddleware")

router.post("/facultyInfo", storedFacultyPhoto.single("photo"), facultyInfo)
router.get("/facultyInfo/:id", getFacultyInfo)
router.get("/allFacultyInfo", getAllFacultyInfo)
router.put("/facultyInfo/:id", updateFacultyInfo)
router.delete("/facultyInfo/:id", deleteFaculty)

module.exports = router
