const express = require("express")
const router = require("./routes/formsRoute")
require("./config/dataBase")
const dotEnv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")



dotEnv.config()

const app = express()
app.set("trust proxy", 1);

const port = process.env.port;
app.use(cors())


app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())



app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()
})

app.use("/user", router)


app.use((req, res) => {
    res.status(404).json("page not found")
})
if (!port) {
    console.log("server busy");
}
else {
    app.listen(port, () => {
        try {
            console.log(`successfully connected to the server on ${port}`);
        } catch (error) {
            console.log({
                message: "error while connecting to the server",
                error: error.message
            });
        }
    })
}