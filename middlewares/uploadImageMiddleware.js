const { cloudinary } = require("../config/uplodeImage")
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const storage1 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "facultyPhotos",
        allowed_formats: ["jpg", "jpeg", "png"],
    }
})

const storedFacultyPhoto = multer({ storage: storage1 })

const storage2 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "studentPhotos",
        allowed_formats: ["jpg", "jpeg", "png"]
    }
})
const storeStudentPhoto = multer({ storage: storage2 })
module.exports = { storedFacultyPhoto, storeStudentPhoto }
