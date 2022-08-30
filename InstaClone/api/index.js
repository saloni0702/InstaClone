const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const formRoute = require("./routes/form");
const postRoute = require("./routes/post");
const multer = require("multer");
const app = express();
dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./upload"))


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
	if(!err)
	{
		console.log("Database connect successfully");
	}
	else
	{
		console.log(err);
	}
});

app.listen(process.env.PORT || 8800,(err)=>{
	if(!err)
	{
		console.log(`Server is running on port`);
	}
	else
	{
		console.log(err);
	}
});

app.get("/",(req,res)=>{
	res.send("Welcome to Home Page");
});

app.use("/form", formRoute);

app.use("/post", postRoute);
