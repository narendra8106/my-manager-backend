const jwt = require("jsonwebtoken")
require("dotenv").config();


const userAuthentication = async (req, res, next) => {

    try {
        const authenticationHeader = req.cookies.autherizationToken;

        if (!authenticationHeader) {
            return res.status(401).json({ message: "Token missing" })
        }


        const verifyToken = jwt.verify(authenticationHeader, process.env.secretKey)

        if (!verifyToken) {
            return res.status(401).json("invalid token")
        }
        req.user = verifyToken;


        next()
    }
    catch (error) {
        return res.status(401).json("something went wrong / token authentication error")
    }


}

module.exports = { userAuthentication }