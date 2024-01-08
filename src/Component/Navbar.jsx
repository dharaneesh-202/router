import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";     
const Navbar = () => {
return(
    <div className="container">

      <div className="navbar">
        <div className="navbar_links">
        <button type="button"  className="button"><Link className="nav_link" to="/Home"><b>Home</b></Link></button>
        <button type="button"className="button"><Link className="nav_link" to="/About"><b>About</b></Link></button>
        <button type="button"className="button"><Link className="nav_link" to="/Contact"><b>Contact</b></Link> </button>
      </div>
    </div>
    <div className="center">
      <div className="left">
        <h1> Fire Dehazing </h1>
      </div>
    </div>
    </div>

)
}
export default Navbar;