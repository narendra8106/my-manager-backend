const { registerModel, contactModel } = require("../models/formsModel.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotEnv = require("dotenv")
dotEnv.config()

const register = async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword } = req.body;
        const findEmail = await registerModel.findOne({ email })
        const hashedPassword = await bcrypt.hash(password, 15)
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 15)
        if (findEmail) {
            return res.status(202).json("email already exist")
        }
        const registerData = await registerModel({ name, email, phone, password: hashedPassword, confirmPassword: hashedConfirmPassword })


        if (!(password === confirmPassword)) {
            return res.status(400).json({
                message: "both passwords are different.enter same passwords"
            })
        }
        const savedRegisterData = await registerData.save()
        res.status(200).json({
            message: "register successfully",
            register_data: savedRegisterData
        })
    } catch (error) {
        res.status(404).json({
            message: "failed to register",
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { phone, password } = req.body;

        const registredUser = await registerModel.findOne({ phone })

        if (!registredUser) {
            return res.status(400).json({
                message: "Phone number not registered"
            });
        }


        const comparePasswords = await bcrypt.compare(password, registredUser.password)

        if (!comparePasswords) {
            return res.status(400).json({
                message: "incorrect password"
            })
        }

        res.status(200).json({
            message: "login successfully",
            token: generateToken,
            userDetails: registredUser
        })

        //payload
        const payload = {
            id: registredUser._id,
            name: registredUser.name
        }

        const generateToken = jwt.sign(payload, process.env.secretKey, { expiresIn: "1h" })

        res.cookie("autherizationToken", generateToken, {
            httpOnly: true,
            secure: true
        })

    } catch (error) {
        res.status(404).json({
            message: "login failed.",
            error: error.message

        })
        console.log(error);
    }
}

const contact = async (req, res) => {
    try {
        const { name, email, contactMessage } = req.body;
        const contactData = await contactModel({ name, email, contactMessage })
        const savedContactData = await contactData.save()

        res.status(200).json({
            message: "will respond soon",
            register_data: savedContactData
        })
    } catch (error) {
        res.status(404).json({
            message: "something went wrong.please try again after sometime",
            error: error.message
        })
    }
}
const getContactData = async (req, res) => {
    try {
        const contactData = await contactModel.find()
        res.status(200).json({
            data: contactData
        })
    } catch (error) {
        res.status(500).json({
            message: "failed to get data",
            error: error.message,

        })
        console.log(error);
    }
}


module.exports = { login, register, contact, getContactData }