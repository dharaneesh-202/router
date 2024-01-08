import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ()=>{
return(
  <div className="container1">
    <div className="navbar1">
        <div className="navbar_links1">
          <button type="button"className="button1"><Link className="nav_link1" to="/About"><b>About</b></Link></button>
          <button type="button"className="button1"><Link className="nav_link1" to="/Contact"><b>Contact</b></Link> </button>
        </div>
        <div className="img1">
          <div className="content">
            <h1>FIRE DEHAZING</h1>
          </div>
          <div className="upload">
            <h2> Upload Your Video here</h2>
          </div>
          <div className="but">
            <button type="button" className="buttonup">Upload Video</button>
          </div>
        </div>
    </div>
  </div>
);
};
export default Home;