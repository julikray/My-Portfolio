import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className='navbar'>
      <div className='navlogo'><img src='images/logo.png' alt='logo' /> </div>

      <div >
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li > <Link to="/" className='headerlink'>Home</Link></li>
          <li ><Link to="/About" className='headerlink'>About</Link></li>
          <li ><Link to="/Education" className='headerlink'>Education</Link></li>
          <li><Link to="/Skills" className='headerlink' >Skills</Link></li>
          <li ><Link to="/Project" className='headerlink'>Project</Link></li>
          <li ><Link to="/Contact" className='headerlink'>Contact</Link></li>
        </ul>
      </div>
      <button className='toggle-button' onClick={() => setIsMobile(!isMobile)} >
        {isMobile ? ( <FontAwesomeIcon icon={faTimes} /> ) : (  <FontAwesomeIcon icon={faBars} /> )}
      </button>
    </div>
  );
}

export default Header;

