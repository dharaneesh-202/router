import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';
const Contact=() =>
{
return(
<div className="container3">
      <div className="navbar3">
        <div className="navbar_links3">
          <button type="button"className="button3"><Link className="nav_link" to="/Home"><b>Home</b></Link></button>
          <button type="button"className="button3"><Link className="nav_link" to="/About"><b>About</b></Link></button>
      </div>
      <div className="img3">
        <div className="con2">
          <h1>FIRE DEHAZING</h1>
        </div>
        <div className="con3">
          <div className="con4">
            <h1>FIRE-101</h1>
            <h1>NATIONAL EMERGENCY NUMBER-112</h1>
            <h1>POLICE-100</h1>
            <h1>AMBULANCE-102.</h1>
          </div>
        </div>
      </div>
    </div>
    </div> 
);
};
export default Contact;