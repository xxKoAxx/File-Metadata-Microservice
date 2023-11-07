const express = require('express');
const router = express.Router();
const apiController = require('../controller/api_controller')
const multer  = require('multer')


const fileFilter = (req, file, callback) => {
    // fix problem can't save arabic strings
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    callback(null, true);
};
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

const upload = multer({ storage, fileFilter })


// [GET] /api/Hello
router.get('/Hello', apiController.greeting)

// [POST] /api/fileanalyse
router.post('/fileanalyse',upload.single('upfile'), apiController.fileAnalyse)




module.exports = router;
