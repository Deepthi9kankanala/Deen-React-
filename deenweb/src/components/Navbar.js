import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';
import Dropdown from './Dropdown';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown]=useState(false);
  //const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click);   
  const closeMobileMenu=() =>setClick(false)
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const showButton=() => {
    if (window.innerWidth <=960){
      //setButton(false);

    }
    else {
      //setButton(true);
    }
  };
  
  
     
  useEffect(() => {
    showButton();
  }, []); // Added an empty dependency array to useEffect to ensure it only runs once.
  
  
  window.addEventListener('resize',showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Deen <i className="fab fa-typo3"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick }>
            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>

          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className ='nav-links' onClick={closeMobileMenu}> Home</Link>

          </li>
          

          <li className='nav-item'  onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/services' className ='nav-links' onClick={closeMobileMenu}> Services<i className='fas fa-caret-down'/></Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item '>
            <Link to='/careers' className ='nav-links' onClick={closeMobileMenu}> Careers</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contactus' className ='nav-links' onClick={closeMobileMenu}> Contact us </Link>

          </li>
          
          <Button />
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
