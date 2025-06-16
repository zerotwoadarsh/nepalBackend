import multer from "multer"
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/temp")
    },
    filename: 
    function functionName(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)    
    }
})

export const upload = multer({
    storage
})