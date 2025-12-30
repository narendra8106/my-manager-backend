const express = require("express")
const formRouter = require("./routes/formsRoute")
const facultyRouter = require("./routes/facultyInfoRoute")
const studentRouter = require("./routes/studentInfoRoute")

require("./config/dataBase")
const dotEnv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")



dotEnv.config()

const app = express()
app.set("trust proxy", 1);

const port = process.env.port;
app.use(cors({
    origin: "https://my-manager-livid.vercel.app",
    credentials: true
}))



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()
})

app.use("/user", formRouter)
app.use("/ece", facultyRouter)
app.use("/ece", studentRouter)


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