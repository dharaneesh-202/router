import React from "react";
import { Link } from "react-router-dom";
// import Navbar from './Navbar.jsx';
import './About.css';
const About=() =>
{
return(
    <div className="container2">
      <div className="navbar2">
        <div className="navbar_links2">
          <button type="button"  className="button2"><Link className="nav_link" to="/Home"><b>Home</b></Link></button>
          <button type="button"className="button2"><Link className="nav_link" to="/Contact"><b>Contact</b></Link> </button>
        </div>
      </div>
      <div className="img2">
        <div className="content1">
          <h1> F I R E    D E H A Z I N G</h1>
        </div>
        <div className="content2">
          <div className="conn">
          <h2> The web page represents an innovative AI-ML solution designed for fire emergencies. It leverages advanced algorithmsto de-smoke and de-haze real-time video feeds, enhancing visibility for rescue operations. This technology aids first responders by providing clearer, safer views of the affected area, improving situational awareness, and helping to locate individuals in need. The web page serves as a user-friendly interface to access and utilize his life-saving tool, demonstrating the fusion of artificial intelligence and machine learning in critical situations.</h2>
          </div>
      </div>
    </div>
  </div>

);
};
export default About;