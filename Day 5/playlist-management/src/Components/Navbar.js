import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
      <Link to='/home'>
          <li className='LandList1'>HOME</li>
        </Link>
        <Link to='/aboutus'>
          <li className='LandList'>GENRE</li>
        </Link>
        <Link to='/contact'>
          <li className='LandList'>ARTISTS</li>
        </Link>
        {/* <Link to='/Dashboard'>
          <li className='LandList'>DASHBOARD</li>
        </Link> */}
        <Link to='/'>
          <li className='LandList'>ALBUMS</li>
        </Link>
     
      </ul>
    </nav>
  );
}

export default Navigation;