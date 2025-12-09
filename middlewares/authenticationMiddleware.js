const jwt = require("jsonwebtoken")
require("dotenv").config();


const userAuthentication = async (req, res, next) => {

    const authenticationHeader = req.headers.authorization
    try {

        if (!authenticationHeader) {
            return res.status(401).json({ message: "Token missing" })
        }

        const token = authenticationHeader.split(" ")[1]


        const verifyToken = jwt.verify(token, process.env.secretKey)

        if (!verifyToken) {
            return res.status(401).json("invalid token")
        }
        req.user = verifyToken;
        console.log(req.user);

        next()
    }
    catch (error) {
        return res.status(401).json("incorrect token")
    }


}

module.exports = { userAuthentication }