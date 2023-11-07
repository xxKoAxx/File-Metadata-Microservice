const {userModel, exerciseModel} = require('../config/database/dbSchema')
const mongoose = require('mongoose')
require('multer')
const db = require('../../index')
const grid = require('gridfs-stream')

class apiController{
/***********************************************************/
//          GET controller
    // [GET] /api/Hello
    greeting (req, res) {
        res.json({greeting: 'hello API'});
    }


    
/***********************************************************/
//          POST controller
    // [POST] /api/fileanalyse
    async fileAnalyse(req, res){
        const file = req.file;
        const originalname = file.originalname;
        const mimetype = file.mimetype;
        const size = file.size;
        
        if (file) {
            console.log('File uploaded successfully!');
            res.json({
                name: originalname,
                type: mimetype,
                size: size
            });
        } else {
            console.error('Error uploading file');
            res.status(500).json({ message: 'Error uploading file' });
        }
    }






}
module.exports = new apiController();