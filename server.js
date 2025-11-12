

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const env = require("dotenv");


const app = express();
env.config();


app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000;

const database = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }

})

database.connect((error) => {
    if (error) {
        console.log(`error while connecting to the database`);
    }
    else {
        console.log(`successfully connected to the database`);
    }

    const createTableQuery = `
CREATE TABLE IF NOT EXISTS contactlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    mobile_no BIGINT
);
`;



    database.query(createTableQuery, (error, result) => {
        if (error) {
            console.error("Error creating table:", error);
        } else {
            console.log("Table contactlist is ready in defaultdb");
        }
    });
})







app.get("/userdata", (req, res) => {
    const query = "select * from contactlist";

    database.query(query, (error, result) => {
        if (error) {
            console.log(`error while getting data`);
        }
        else {
            res.json(result)
        }
    })
})

app.post("/userdata", (req, res) => {
    const { username, email, mobile_no } = req.body;
    const query = "insert into contactlist (username,email,mobile_no) values(?,?,?) "

    database.query(query, [username, email, mobile_no], (error, result) => {
        if (error) {
            console.error(`error while inserting data into database`);
        }
        else {
            res.json(result)
        }
    })
})

app.listen(port, (error) => {
    if (error) {
        console.log(`error occured while creating server`, error);
    }
    else {
        console.log(`server running at ${port}`);
    }
})

