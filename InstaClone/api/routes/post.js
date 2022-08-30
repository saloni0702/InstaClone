const router = require("express").Router();
const PostModal = require("../models/postSchema");

router.get("/",async (req,res)=>{
	let object = await PostModal.find().sort({"date":-1});
	//let data = await object.json();
	res.send(object);
});

module.exports = router;