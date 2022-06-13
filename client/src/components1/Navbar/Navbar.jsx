import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Login from "../Login"
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name" > <img style={{ width: "113px"}}
       
        src="http://127.0.0.1:6500/public/logo.png"
        alt='logo'
      /></div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        <Login/>
      </div>
    </div>
  );
};

export default navbar;
