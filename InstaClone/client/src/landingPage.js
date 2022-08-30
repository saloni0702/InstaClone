import './landingPage.css';
import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="row">
        <div className="col">
          <img src="./images/main.jpg" alt="image" id="image"/>
        </div>
        <div className="col1">
          <h1 className="heading">Instagram Login</h1>
          <Link to="PostView"><button>Press</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;