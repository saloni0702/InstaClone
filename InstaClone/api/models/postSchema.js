const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	name:{
		type: String,
		require: true
	},
	location:{
		type: String
	},
	likes:{
		type: String
	},
	description:{
		type: String
	},
	image:{
		data: Buffer,
		contentType: String 	
	},
	date:{
		type: String
	},
	imagePath:{
		type: String
	}
})

module.exports = mongoose.model("PostModal", PostSchema);