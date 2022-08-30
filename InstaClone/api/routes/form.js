const router = require("express").Router();
const PostModal = require("../models/postSchema");
const multer = require("multer");
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
    	console.log(file)
        cb(null, file.originalname)
    }
});
  
const upload = multer({ storage: storage }).single("image");

router.post("/update",async (req,res)=>{
	try{ 
		upload(req, res, async (err)=>{
			await PostModal.create({name: req.body.author,
			location: req.body.location,
			likes: 0,
			description: req.body.description,
			image: {data: req.file.filename,
			contentType: "image/png"},
			date: new Date().getDate() + "/" + new Date().getMonth() + "/"+ new Date().getUTCFullYear(),
			imagePath: "http://localhost:8800/" + req.body.imagePath
		});
	})
	}catch(err){
		res.status(500).json(err);
	}
	console.log(req.body);
});

router.get("/",(req,res)=>{
	res.send("Welcome to form page");
});

module.exports = router;