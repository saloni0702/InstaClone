import React from "react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

const PostView = ()=> {
    const [userData, setUserData] = useState([]);
    const [show,setShow] = useState(0);
    const [show2,setShow2] = useState(3);

    useEffect(()=> {
        // const fetchPost = async ()=>{
        // axios.get("http://localhost:8800/post").then((response) =>{
        //     const data = response.data;
        //     setUserData({userData:data});
        //})    
    //}
    //fetchPost();
        fetch("http://localhost:8800/post").then((response) =>{
            response.json().then((res) => {
                setUserData(res);
            })
        })
    }, []);

    const handleClick = (e) =>{
        let a = show;
        let b = show2;
        if(a>userData.length-4)
        {
            let c = 0 
            let d = 3
            setShow(c)
            setShow2(d)
        }
        else
        {
            setShow(a+3)
            setShow2(b+3)
        }
    }
    //console.log(userData)
    return (
        <>
            <div className="container">
                <header>
                    <div className="nav">
                        <img src="./images/head.jpg" alt="insta-logo" className="head"></img>
                        <Link to="/Form"><img src="./images/camera.jpg" alt="camera" class="camera"></img></Link>
                    </div>
                </header>
                <hr/>
                <button onClick={handleClick} className="b1">Next</button>
                <div >
                    {

                        userData.slice(show,show2).map((user,i)=> {
                            return (
                                <div className="post">
                                            <div className="info">
                                                <div className="user">
                                                    <p className="username">{user.name}</p>
                                                    <p className="location">{user.location}</p>
                                                </div>
                                                <img src="./images/dots.jpg" className="options" alt="dot"/>
                                            </div>
                                           <img className="post-image" crossOrigin="anonymous" src={user.imagePath}/>
                                            <div className="post-content">
                                                <div className="reaction-wrapper">
                                                    <img src="./images/like.jpg" className="icon" alt="like"/>
                                                    <img src="./images/share.jpg" className="icon" alt="share"/>
                                                    <p className="post-time">{user.date}</p>
                                                </div>
                                                <p className="likes">{user.likes} likes</p>
                                                <p className="description">{user.description}</p>
                                            </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;