const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Cours");
const multer = require("multer");

//dfefinir un storage pour ajouter un file
const storage = multer.diskStorage({
  //destination de l'image
  destination: function (req, file, callback) {
    callback(null, "./cour");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploads = multer({
  storage: storage,
});

//post comment
router.post("/",uploads.any("file"), controllers.Postcours);

module.exports = router;

