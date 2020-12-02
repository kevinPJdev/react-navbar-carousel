import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
	
	function handleClick() {
		return setClick(!click);
  }
  
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          KST 
          <i class='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
                    <li className='nav-item'>
            <Link
              to='/destinations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Destinations
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/thingstodo'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Things to do
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>

          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>BOOK A TOUR</Button>}
      </div>
    </nav>
  </>
  )
}

export default Navbar
