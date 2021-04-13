
  
const express= require('express');
const router=express.Router();
const controller= require('../controllers/images.controller');

const multer = require("multer");


// --------------multer file upload settings -------------
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
  
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
// -------------- END multer file upload settings -------------



router.post('/images', multer({ storage: fileStorage }).single("file") ,controller.uploadImages);
router.get('/images',controller.getImages);
router.delete('/images',controller.deleteImages);

module.exports=router;