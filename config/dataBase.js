const mongoose = require("mongoose")
const dotEnv = require("dotenv")

dotEnv.config()

module.exports = mongoose.connect(process.env.dBURL, { dbName: "my_manager_forms" }).then(() => {
    console.log("dataBase connected successfully");
}).catch((error) => {
    console.log({
        message: "error while connecting to the database",
        error: error.message
    });
});