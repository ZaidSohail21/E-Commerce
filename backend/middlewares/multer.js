import multer from "multer";

const storage=multer.diskStorage({
    filename:function(req,res,callback){
        callback(null,filename.originalname)
    }
})

const upload=multer({storage})
export default upload;