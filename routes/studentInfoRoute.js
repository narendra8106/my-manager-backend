const express = require("express")
const router = express.Router()
const { studentInfo, getStudentInfo, updateStudentInfo, deleteStudentInfo, getAllStudentsInfo } = require("../controllers/studentInfoController")
const { storeStudentPhoto } = require("../middlewares/uploadImageMiddleware")


router.post("/studentInfo", storeStudentPhoto.single("photo"), studentInfo)
router.get("/studentInfo/:id", getStudentInfo)
router.get("/allStudentsInfo", getAllStudentsInfo)
router.put("/studentInfo/:id", updateStudentInfo)
router.delete("/studentInfo/:id", deleteStudentInfo)


module.exports = router