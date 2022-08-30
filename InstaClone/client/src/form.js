import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./form.css";
 
export default function Create() {
 const [form, setForm] = useState({
   author: "",
   image: null,
   location: "",
   description: "",
   imagePath: ""
 });
  const navigate = useNavigate();

 function handleChange(e){
    const {name, value} = e.target;
    setForm(prevForm => ({...prevForm,[name]:value}));
  }

  function handleUpload(e){
    //console.log(e.target.files);
    const file = e.target.files[0];
    const path = e.target.files[0].name;
    //console.log(path);
    setForm(prevForm => ({...prevForm,image:file,imagePath:path}));
   // console.log("anything")
  }


 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    //console.log(form)
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPost = new FormData();
    newPost.append("author",form.author);
    newPost.append("image",form.image);
    newPost.append("location",form.location);
    newPost.append("description",form.description);
    newPost.append("imagePath",form.imagePath);
    
    axios.post("http://localhost:8800/form/update",newPost, {headers: {
        "Content-Type" : "multipart/form-data"
      }})
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", image: null, location: "", description: "", imagePath: "" });
   navigate("/PostView");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
    <header>
            <div className="nav">
              <img src="./images/head.jpg" alt="insta-logo" className="head"></img>
              <img src="./images/camera.jpg" alt="camera" class="camera"></img>
            </div>
      </header>
      <div className="container2">
     <h3>Add New Post</h3>
     <hr/>
     <form onSubmit={onSubmit} encType='multipart/form-data'>
       <div className="form-group">
         <label htmlFor="image2">Image:</label>
         <input
           type="file"
           autoComplete='off'
           className="form-control"
           id="image2"
           name="image"
           onChange={handleUpload}
         />
       </div><br/>
       <div className="form-group">
         <label htmlFor="name">Author:</label>
         <input
           type="text"
           className="form-control"
           id="name"
           name = "author"
           onChange={handleChange}
         />
       </div><br/>
       <div className="form-group">
         <label htmlFor="location">Location:</label>
         <input
           type="text"
           className="form-control"
           id="location"
           name = "location"
           onChange={handleChange}
         />
       </div><br/>
       <div className="form-group">
         <label htmlFor="description">Description:</label>
         <input
           type="text"
           className="form-control"
           id="description"
           name = "description"
           onChange={handleChange}
         />
       </div><br/>
       <div className="form-group">
         <input
           type="submit"
           value="Post"
           className="btn btn-primary"
         />
       </div>
     </form>
     </div>
   </div>
 );
}