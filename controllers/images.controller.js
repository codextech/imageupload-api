

const imagesModel = require('../models/images.model');

exports.uploadImages = async(req,res) => {
    try {
        const file =  req.file;

        if (!file) {
            return res.status(400).json({
                data: null,
                message : 'no file included'
            });    
            
        } 
        console.log(req.file);

        const createdRecord = await imagesModel.create({
            name : file.originalname,
            url : file.path
        });

    
     return res.status(201).json({
         data: createdRecord,
         message : 'success'
     });        

    } catch (error) {
     return res.status(500);        
    }
}

exports.getImages= async (req,res)=> {
console.log("🚀 ~ file: images.controller.js ~ line 14 ~ exports.getImages= ~ req", req.params)

    try {
       const result = await imagesModel.find({});
     return res.status(200).json({
         data: result,
         message: ''
     });        

    } catch (error) {
     console.log(error);
     return res.status(500);        
    }


}

exports.deleteImages = async (req, res) => {
    try {
           /*  delete all */
          await imagesModel.deleteMany({})
        return res.status(200).json({
            message: 'Deleted'
        }); 

    } catch (error) {
      console.log(error);
      res.status(500);
    }
  };