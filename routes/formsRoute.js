const express = require("express")
const { register, login, contact, getContactData } = require("../controllers/formsController.js")
const router = express.Router()
const { userAuthentication } = require("../middlewares/authenticationMiddleware.js")



router.post("/register", register)

router.post("/login", login)

router.post("/contact", userAuthentication, contact)

router.get("/getContactData", userAuthentication, getContactData)


module.exports = router