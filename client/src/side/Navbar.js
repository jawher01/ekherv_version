import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useSelector } from "react-redux"
import LogoutBtn from "../Components/auth/LougOutButton"
import { getAllFormation } from "../js/actions/formation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Navbar() {
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 

  const user = useSelector(state => state.userReducer.user);
  
  const id=user._id

 
  
  
  
  return (
    <div style={{width:"110.35%"}}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'  style={{marginLeft:"-10%"}}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         
          <div style={{marginLeft:"80%",display:"flex",marginRight:"5%",justifycontent:" space-between"}}>
              <div style={{marginRight:"30%" }}>
              <Link to={`/profil/${id}`} style={{textDecoration: 'none'}}>profile</Link>
              </div>
             
              <LogoutBtn/>
         
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
         
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
                
              </Link>
              
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })}
           
          </ul>
          
        </nav>
      
      </IconContext.Provider>
      </div>
  );
}

export default Navbar;